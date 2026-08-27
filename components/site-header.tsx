import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-base font-medium tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{profile.bio}</p>
        </div>
        <div className="-mr-1.5 shrink-0">
          <ThemeToggle />
        </div>
      </div>

      <nav className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            rel="me noreferrer"
            target="_blank"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
