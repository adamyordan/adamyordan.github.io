export interface ProfileLink {
  label: string;
  href: string;
}

export const profile = {
  name: "Adam Jordan",
  handle: "adamyordan",
  // TODO: replace with your own wording.
  bio: "Security researcher and software engineer.",
  siteUrl: "https://adamyordan.github.io",
  links: [
    { label: "GitHub", href: "https://github.com/adamyordan" },
    { label: "X", href: "https://x.com/_adamyordan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adamyordan" },
  ] satisfies ProfileLink[],
};
