export interface AwardPhoto {
  /** Path under public/, e.g. "/awards/hitb-2022.webp". */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Award {
  /** "YYYY" — used for ordering and the year heading. */
  year: string;
  event: string;
  /** Where it took place / what it was part of. */
  context?: string;
  /** Team competed under, when it was a team event. */
  team?: string;
  /** One line per result, e.g. "1st place — onsite". */
  placements: string[];
  url?: string;
  photo?: AwardPhoto;
}

export const awards: Award[] = [
  {
    year: "2024",
    event: "SpiritCyber 2024",
    context: "IoT Hackathon, Singapore International Cyber Week",
    team: "Orca (KAIC)",
    placements: ["Overall winner", "Highest bounty earned"],
    photo: {
      src: "/awards/spiritcyber-2024.webp",
      alt: "Team Orca (KAIC) holding the SpiritCyber-24 bounty winner cheque for $16,700 at Singapore International Cyber Week 2024",
      width: 1200,
      height: 672,
      caption: "SpiritCyber-24 bounty winner",
    },
  },
  {
    year: "2022",
    event: "HITB SecConf 2022",
    context: "International CTF, Singapore",
    team: "PDKT",
    placements: ["1st place — onsite", "5th place — online"],
    photo: {
      src: "/awards/hitb-2022.webp",
      alt: "Team PDKT on stage at the HITB SecConf 2022 Singapore CTF prize giving, beside the slide announcing their onsite 1st place",
      width: 1010,
      height: 568,
      caption: "HITB CTF onsite 1st place",
    },
  },
];
