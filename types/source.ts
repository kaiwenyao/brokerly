/**
 * A verifiable information source (official fee page, regulator notice,
 * benchmark rate page). Rates vary by country/entity, so sources are
 * never stored as one global value per brand.
 */
export interface Source {
  /** Broker slug; undefined for regulators/benchmarks */
  brokerSlug?: string;
  /** Account country/entity, e.g. "美国版", "欧洲版（爱尔兰）" */
  entity: string;
  /** Account type when relevant, e.g. "Invest", "Standard" */
  accountType?: string;
  /** Short label of the page, e.g. "美股与 ETF 佣金" */
  topic: string;
  url: string;
  /** What this page was used to verify */
  usedFor: string;
  /** ISO 8601 date the link was last checked */
  checkedAt: string;
  /** The rate quoted on this page at check time, if any */
  quotedRate?: string;
  notes?: string;
}
