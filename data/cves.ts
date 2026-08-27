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
  /** Advisory is public but no CVE has been assigned yet. */
  cvePending?: boolean;
  /** Still under embargo — kept here for the record, but not rendered. */
  embargoed?: boolean;
}

/**
 * Advisories credited to @adamyordan.
 *
 * Order does not matter — the page sorts newest first and groups by year.
 * To add one, copy an entry below and fill in what is public.
 */
export const advisories: Advisory[] = [
  {
    ghsa: "GHSA-rhrf-7x22-x2rj",
    title: "Broken access control in asset model file attachments",
    product: "Snipe-IT",
    pkg: "snipe/snipe-it",
    ecosystem: "Composer",
    severity: "critical",
    cvss: 9.1,
    cwe: ["CWE-284", "CWE-863"],
    published: "2026-08-24",
    url: "https://github.com/grokability/snipe-it/security/advisories/GHSA-rhrf-7x22-x2rj",
    cvePending: true,
  },
  {
    cve: "CVE-2026-63293",
    ghsa: "GHSA-j825-cg34-5fr5",
    title:
      "metadata.yaml symlink in a crafted image gives arbitrary host file read/write as root",
    product: "LXD",
    pkg: "canonical/lxd",
    severity: "critical",
    cvss: 9.9,
    published: "2026-07-31",
    url: "https://github.com/canonical/lxd/security/advisories/GHSA-j825-cg34-5fr5",
  },
  {
    cve: "CVE-2026-63343",
    ghsa: "GHSA-fmjx-5j3g-997p",
    title:
      "metadata.yaml symlink in a crafted image gives arbitrary host file read/write as root",
    product: "Incus",
    pkg: "github.com/lxc/incus",
    ecosystem: "Go",
    severity: "critical",
    cvss: 9.9,
    cwe: ["CWE-73"],
    published: "2026-07-30",
    url: "https://github.com/lxc/incus/security/advisories/GHSA-fmjx-5j3g-997p",
  },
  // Under embargo: these advisories are still in review and 404 for the public.
  // Flip `embargoed` to false (and fill in the details) once they are published.
  {
    ghsa: "GHSA-79gx-h528-j9xf",
    product: "Froxlor",
    published: "2026",
    url: "https://github.com/froxlor/froxlor/security/advisories/GHSA-79gx-h528-j9xf",
    embargoed: true,
  },
  {
    ghsa: "GHSA-4333-x9p4-8xj7",
    product: "YesWiki",
    published: "2026",
    url: "https://github.com/YesWiki/yeswiki/security/advisories/GHSA-4333-x9p4-8xj7",
    embargoed: true,
  },
  {
    cve: "CVE-2026-79753",
    product: "Nuclio",
    published: "2026",
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
