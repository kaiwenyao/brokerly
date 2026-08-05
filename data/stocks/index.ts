import type { Instrument } from "@/types";
import { aapl } from "./aapl";
import { voo } from "./voo";
import { vti } from "./vti";
import { spy } from "./spy";
import { qqq } from "./qqq";

/** Instrument (stock / ETF) registry — CONTENT LAYER. See data/brokers. */
const instruments: Instrument[] = [aapl, voo, vti, spy, qqq];

export function getAllInstruments(kind?: Instrument["kind"]): Instrument[] {
  return kind ? instruments.filter((i) => i.kind === kind) : instruments;
}

export function getInstrumentBySymbol(
  symbol: string,
): Instrument | undefined {
  return instruments.find(
    (i) => i.symbol.toLowerCase() === symbol.toLowerCase(),
  );
}

export function getInstrumentSymbols(): string[] {
  return instruments.map((i) => i.symbol);
}
