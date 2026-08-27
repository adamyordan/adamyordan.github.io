export interface Certification {
  /** Acronym, e.g. "OSCP". Omitted for credentials that do not have one. */
  code?: string;
  /**
   * Name without the issuer. Rendered as "<issuer> <name>", which is the
   * official title — e.g. OffSec + "Certified Professional".
   */
  name: string;
  issuer: string;
  /** ISO date the credential was issued. */
  issued: string;
  /** Verification link. */
  url: string;
  /** Pinned to the top of the list, ahead of the date ordering. */
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    code: "OSMR",
    name: "macOS Researcher",
    issuer: "OffSec",
    issued: "2023-07-05",
    url: "https://www.credential.net/96baacc3-c8f3-42b5-ac8a-88f87263634c",
  },
  {
    code: "OSDA",
    name: "Defense Analyst",
    issuer: "OffSec",
    issued: "2023-06-07",
    url: "https://www.credential.net/a41ccf30-c8ee-4625-8375-febc407f25c0",
  },
  {
    code: "OSCE3",
    name: "Certified Expert 3",
    issuer: "OffSec",
    issued: "2023-04-07",
    url: "https://www.credential.net/cd3ff77b-ddf9-4765-858e-519f545b3583",
    featured: true,
  },
  {
    code: "OSWE",
    name: "Web Expert",
    issuer: "OffSec",
    issued: "2023-04-04",
    url: "https://www.credential.net/9917c80c-093d-470f-b24e-bf8d2a106484",
  },
  {
    code: "OSEP",
    name: "Experienced Penetration Tester",
    issuer: "OffSec",
    issued: "2023-01-12",
    url: "https://www.credential.net/713d8498-21e5-4152-a91b-20a8f0a4852d",
  },
  {
    code: "OSED",
    name: "Exploit Developer",
    issuer: "OffSec",
    issued: "2022-11-10",
    url: "https://www.credential.net/5eab14ec-ddad-42c9-88b9-10cc63c8166f",
  },
  {
    code: "OSWA",
    name: "Web Assessor",
    issuer: "OffSec",
    issued: "2022-09-15",
    url: "https://www.credential.net/b6b6edb8-16b0-4aec-964c-9eecf2b6379c",
  },
  {
    code: "OSCP",
    name: "Certified Professional",
    issuer: "OffSec",
    issued: "2019-11-17",
    url: "https://www.credential.net/0b1ecaf3-86c4-4462-bb53-3267105a8eee",
  },
];
