export type Severity = "critical" | "high" | "moderate" | "low";

export interface Advisory {
  /** CVE identifier. Omit when no CVE has been assigned — the GHSA id is used instead. */
  cve?: string;
  /** GitHub Security Advisory id. */
  ghsa: string;
  title: string;
  /** Human-facing product name, e.g. "Kirby". */
  product: string;
  /** Package name as published, e.g. "getkirby/cms". */
  pkg?: string;
  /** Package ecosystem, e.g. "Composer", "pip", "Go". */
  ecosystem?: string;
  severity: Severity;
  cvss?: number;
  cwe?: string[];
  /** ISO date (YYYY-MM-DD) the advisory was published. */
  published: string;
  url: string;
  /** True when credited alongside other reporters. */
  coCredited?: boolean;
}

/**
 * Advisories crediting @adamyordan.
 *
 * Order does not matter — the page sorts newest first.
 * To add an entry, copy a block below and fill it in from the advisory page.
 */
export const advisories: Advisory[] = [
  {
    ghsa: "GHSA-g3hq-hphg-8fhh",
    title:
      "Terminal command-allowlist bypass via argument injection leads to RCE",
    product: "Pheditor",
    pkg: "pheditor/pheditor",
    ecosystem: "Composer",
    severity: "high",
    cvss: 8.8,
    cwe: ["CWE-78", "CWE-88"],
    published: "2026-07-23",
    url: "https://github.com/advisories/GHSA-g3hq-hphg-8fhh",
    coCredited: true,
  },
  {
    ghsa: "GHSA-7rx3-5wx3-5v76",
    title:
      "Non-admin operators can disable webhook SSRF protection via allow_private",
    product: "Nebula-mesh",
    pkg: "github.com/forgekeep/nebula-mesh",
    ecosystem: "Go",
    severity: "high",
    cvss: 7.7,
    cwe: ["CWE-862", "CWE-918"],
    published: "2026-07-01",
    url: "https://github.com/advisories/GHSA-7rx3-5wx3-5v76",
  },
  {
    cve: "CVE-2026-54004",
    ghsa: "GHSA-89cp-7p28-jffg",
    title: "Access to files of top-level drafts is not protected by permissions",
    product: "Kirby",
    pkg: "getkirby/cms",
    ecosystem: "Composer",
    severity: "moderate",
    cvss: 6.3,
    cwe: ["CWE-862"],
    published: "2026-06-17",
    url: "https://github.com/advisories/GHSA-89cp-7p28-jffg",
  },
  {
    cve: "CVE-2026-57121",
    ghsa: "GHSA-rh39-9c67-59mh",
    title:
      "Missing ownership check on DELETE endpoints lets members delete others' content",
    product: "PraisonAI",
    pkg: "praisonai-platform",
    ecosystem: "pip",
    severity: "high",
    cvss: 8.1,
    cwe: ["CWE-285"],
    published: "2026-06-17",
    url: "https://github.com/advisories/GHSA-rh39-9c67-59mh",
  },
];
