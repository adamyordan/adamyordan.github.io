import { certifications, type Certification } from "@/data/certifications";
import { Separator } from "@/components/ui/separator";

function CertificationRow({ certification }: { certification: Certification }) {
  return (
    <li>
      <a
        href={certification.url}
        target="_blank"
        rel="noreferrer"
        className="-mx-3 flex items-baseline gap-x-3 rounded-md px-3 py-2 transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:outline-none"
      >
        <span className="w-14 shrink-0 font-mono text-sm text-foreground">
          {certification.code}
        </span>
        <span className="flex-1 text-sm text-foreground/90">
          {certification.issuer} {certification.name}
        </span>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {certification.issued.slice(0, 4)}
        </span>
      </a>
    </li>
  );
}

export function CertificationList() {
  // Featured credentials first, then newest.
  const sorted = [...certifications].sort(
    (a, b) =>
      Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
      b.issued.localeCompare(a.issued),
  );
  return (
    <section aria-labelledby="certifications">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="certifications" className="text-sm font-medium">
          Certifications
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          {sorted.length}
        </span>
      </div>

      <Separator className="mt-3" />

      <ul className="mt-3">
        {sorted.map((certification) => (
          <CertificationRow
            key={certification.url}
            certification={certification}
          />
        ))}
      </ul>
    </section>
  );
}
