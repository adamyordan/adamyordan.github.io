export type Severity = "critical" | "high" | "moderate" | "low";

export interface Advisory {
  /** CVE identifier. Omit when none has been assigned — the GHSA id is shown instead. */
  cve?: string;
  /** GitHub Security Advisory id, when there is one. */
  ghsa?: string;
  /** Short description of the issue. Omit while an advisory is still embargoed. */
  title?: string;
  /** Human-facing product name, e.g. "Kirby". */
  product: string;
  /** Package name as published, e.g. "getkirby/cms". */
  pkg?: string;
  /** Package ecosystem, e.g. "Composer", "npm", "Maven". */
  ecosystem?: string;
  severity?: Severity;
  cvss?: number;
  cwe?: string[];
  /** "YYYY-MM-DD", or just "YYYY" / "YYYY-MM" when the exact date is unknown. */
  published: string;
  url?: string;
  /** True when credited alongside other reporters. */
  coCredited?: boolean;
  /** True while the advisory details are not public yet. */
  pending?: boolean;
}

/**
 * Advisories credited to @adamyordan.
 *
 * Order does not matter — the page sorts newest first and groups by year.
 * To add one, copy an entry below and fill in what is public.
 */
export const advisories: Advisory[] = [
  {
    cve: "CVE-2026-79753",
    product: "Nuclio",
    published: "2026",
    pending: true,
  },
  {
    cve: "CVE-2026-69222",
    ghsa: "GHSA-4r6h-5v86-94p3",
    title:
      "join filter miscomputes complexity, allowing memory exhaustion via concat",
    product: "LiquidJS",
    pkg: "liquidjs",
    ecosystem: "npm",
    severity: "high",
    cvss: 7.5,
    cwe: ["CWE-400"],
    published: "2026-08-19",
    url: "https://github.com/harttle/liquidjs/security/advisories/GHSA-4r6h-5v86-94p3",
  },
  {
    cve: "CVE-2026-69088",
    ghsa: "GHSA-7pgq-cr25-xvc8",
    title:
      "Blueprint dynamic-field directives allow arbitrary static method invocation",
    product: "Grav CMS",
    pkg: "getgrav/grav",
    ecosystem: "Composer",
    severity: "high",
    cvss: 8.1,
    cwe: ["CWE-94"],
    published: "2026-08-03",
    url: "https://github.com/getgrav/grav/security/advisories/GHSA-7pgq-cr25-xvc8",
  },
  {
    cve: "CVE-2026-69090",
    ghsa: "GHSA-fcq9-w4hp-xchg",
    title:
      "Missing organization check in role handlers allows cross-organization role modification",
    product: "Admidio",
    pkg: "admidio/admidio",
    ecosystem: "Composer",
    severity: "moderate",
    cvss: 4.9,
    cwe: ["CWE-862"],
    published: "2026-08-03",
    url: "https://github.com/Admidio/admidio/security/advisories/GHSA-fcq9-w4hp-xchg",
  },
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
    cve: "CVE-2026-63464",
    ghsa: "GHSA-7rx3-5wx3-5v76",
    title:
      "Non-admin operators can disable webhook SSRF protection via allow_private",
    product: "Nebula Mesh",
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
  {
    cve: "CVE-2026-33003",
    ghsa: "GHSA-qqjr-hf5h-jx3q",
    title: "LoadNinja API keys stored unencrypted in job config.xml",
    product: "Jenkins LoadNinja Plugin",
    pkg: "org.jenkins-ci.plugins:loadninja",
    ecosystem: "Maven",
    severity: "moderate",
    cvss: 4.3,
    cwe: ["CWE-312"],
    published: "2026-03-18",
    url: "https://github.com/advisories/GHSA-qqjr-hf5h-jx3q",
  },
  {
    cve: "CVE-2026-33004",
    ghsa: "GHSA-p9hg-wrmv-v8cp",
    title: "LoadNinja API keys not masked on the job configuration form",
    product: "Jenkins LoadNinja Plugin",
    pkg: "org.jenkins-ci.plugins:loadninja",
    ecosystem: "Maven",
    severity: "moderate",
    cvss: 4.3,
    cwe: ["CWE-200"],
    published: "2026-03-18",
    url: "https://github.com/advisories/GHSA-p9hg-wrmv-v8cp",
  },
];
