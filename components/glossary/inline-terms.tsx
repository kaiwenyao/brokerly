import { Children, cloneElement, isValidElement, Fragment } from "react";
import type { ReactElement, ReactNode } from "react";
import { GlossaryTip } from "./glossary-tip";
import { splitByGlossaryTerms } from "@/lib/glossary-inline";

interface ChildrenProps {
  children?: ReactNode;
  href?: string;
}

function isAnnotatable(node: ReactElement): node is ReactElement<ChildrenProps> {
  const props = node.props as ChildrenProps;
  // Anything with an href renders a link — nesting a second link is invalid HTML.
  return props?.children !== undefined && props.href === undefined;
}

function annotateString(
  text: string,
  shouldLink: (slug: string) => boolean,
  keyPrefix: string,
): ReactNode {
  const segments = splitByGlossaryTerms(text);
  if (segments.length === 1 && !segments[0].slug) return text;

  return segments.map((segment, index) => {
    if (!segment.slug || !shouldLink(segment.slug)) return segment.text;
    return (
      <GlossaryTip key={`${keyPrefix}-${index}`} slug={segment.slug}>
        {segment.text}
      </GlossaryTip>
    );
  });
}

function annotate(
  node: ReactNode,
  shouldLink: (slug: string) => boolean,
  keyPrefix: string,
): ReactNode {
  if (typeof node === "string") {
    return annotateString(node, shouldLink, keyPrefix);
  }

  if (Array.isArray(node)) {
    return Children.map(node, (child, index) =>
      annotate(child, shouldLink, `${keyPrefix}-${index}`),
    );
  }

  if (isValidElement(node) && isAnnotatable(node)) {
    return cloneElement(node, {
      children: annotate(node.props.children, shouldLink, keyPrefix),
    });
  }

  return node;
}

interface InlineTermsProps {
  children: ReactNode;
  /** Returns true the first time a slug is seen in the current section. */
  shouldLink: (slug: string) => boolean;
}

/**
 * Wraps glossary jargon found in rendered markdown text with a hover
 * definition that links through to the full term page.
 */
export function InlineTerms({ children, shouldLink }: InlineTermsProps) {
  return <Fragment>{annotate(children, shouldLink, "t")}</Fragment>;
}
