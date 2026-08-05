import type { Instrument } from "@/types";

/** Instrument (stock / ETF) registry — CONTENT LAYER. See data/brokers. */
const instruments: Instrument[] = [
  // PLACEHOLDER: import and register instrument data files here.
];

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
