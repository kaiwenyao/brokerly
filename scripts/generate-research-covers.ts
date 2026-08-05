/**
 * Generate research article cover images via SenseNova:
 * 1) flash-lite crafts a detailed cover prompt
 * 2) u1-fast generates a 16:9 image
 * 3) download to public/images/research/{slug}.jpg
 * 4) set cover on the matching data/research/*.ts file
 *
 * Usage: pnpm generate:covers
 * Requires SENSENOVA_API_KEY in .env.local
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getAllArticles } from "../data/research";

const API_BASE = "https://token.sensenova.cn/v1";
const OUT_DIR = path.join(process.cwd(), "public/images/research");
const DATA_DIR = path.join(process.cwd(), "data/research");
const SIZE = "2752x1536";

function requireApiKey(): string {
  const key = process.env.SENSENOVA_API_KEY?.trim();
  if (!key) {
    throw new Error("SENSENOVA_API_KEY is missing. Set it in .env.local");
  }
  return key;
}

async function chatPrompt(apiKey: string, title: string, description: string): Promise<string> {
  const system = `你是财经媒体视觉总监。根据文章标题与摘要，写一段用于文生图模型的详细封面 prompt（中文为主，可夹少量英文专有名词）。
硬性要求：
- 16:9 横向编辑封面，适合券商费用研究站 Brokerly
- 深青灰 / 炭黑主色，可有少量冷色高光；禁止紫色渐变、奶油底+赤陶、霓虹发光、emoji
- 抽象金融氛围或数据/市场隐喻即可，不要塞满可读 UI 文字、不要大段英文标题字
- 不要出现真实人物面孔、不要品牌 logo
- 只输出最终 prompt 正文，不要解释、不要引号包裹`;

  const res = await fetch(`${API_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sensenova-6.7-flash-lite",
      stream: false,
      reasoning_effort: "none",
      messages: [
        { role: "system", content: system },
        {
          role: "user",
          content: `标题：${title}\n摘要：${description}`,
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`chat/completions failed ${res.status}: ${await res.text()}`);
  }

  const json = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const content = json.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error("Empty prompt from flash-lite");
  return content;
}

async function generateImage(apiKey: string, prompt: string): Promise<string> {
  const res = await fetch(`${API_BASE}/images/generations`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sensenova-u1-fast",
      prompt,
      size: SIZE,
      n: 1,
    }),
  });

  if (!res.ok) {
    throw new Error(`images/generations failed ${res.status}: ${await res.text()}`);
  }

  const json = (await res.json()) as { data?: { url?: string }[] };
  const url = json.data?.[0]?.url;
  if (!url) throw new Error("No image URL in response");
  return url;
}

async function downloadJpg(url: string, dest: string): Promise<void> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
}

async function setCoverField(slug: string, coverPath: string): Promise<void> {
  const files = await readdir(DATA_DIR);
  const tsFiles = files.filter((f) => f.endsWith(".ts") && f !== "index.ts");

  for (const file of tsFiles) {
    const full = path.join(DATA_DIR, file);
    const src = await readFile(full, "utf8");
    if (!src.includes(`slug: "${slug}"`)) continue;

    let next = src;
    if (/^\s*cover:\s*["'].*["'],?\s*$/m.test(src)) {
      next = src.replace(
        /^\s*cover:\s*["'].*["'],?\s*$/m,
        `  cover: "${coverPath}",`,
      );
    } else if (/readingMinutes:\s*\d+,/.test(src)) {
      next = src.replace(
        /(readingMinutes:\s*\d+,)/,
        `$1\n  cover: "${coverPath}",`,
      );
    } else {
      next = src.replace(
        /(publishedAt:\s*["'][^"']+["'],)/,
        `$1\n  cover: "${coverPath}",`,
      );
    }

    if (next === src) {
      throw new Error(`Could not insert cover for ${slug} in ${file}`);
    }
    await writeFile(full, next);
    console.log(`  updated ${file}`);
    return;
  }

  throw new Error(`No data file found for slug ${slug}`);
}

async function main() {
  const apiKey = requireApiKey();
  await mkdir(OUT_DIR, { recursive: true });

  const only = process.argv.slice(2).filter((a) => !a.startsWith("-"));
  const articles = getAllArticles().filter(
    (a) => only.length === 0 || only.includes(a.slug),
  );

  if (articles.length === 0) {
    throw new Error("No articles matched");
  }

  for (const article of articles) {
    console.log(`\n→ ${article.slug}`);
    const prompt = await chatPrompt(apiKey, article.title, article.description);
    console.log(`  prompt: ${prompt.slice(0, 120)}…`);

    const url = await generateImage(apiKey, prompt);
    const dest = path.join(OUT_DIR, `${article.slug}.jpg`);
    await downloadJpg(url, dest);

    const coverPath = `/images/research/${article.slug}.jpg`;
    await setCoverField(article.slug, coverPath);
    console.log(`  saved ${dest}`);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
