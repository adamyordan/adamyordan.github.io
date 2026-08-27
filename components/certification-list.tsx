import { certifications, type Certification } from "@/data/certifications";
import { Separator } from "@/components/ui/separator";

const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** All rows share one issuer today; fall back to a plain heading if that changes. */
function soleIssuer(items: Certification[]) {
  const issuers = new Set(items.map((item) => item.issuer));
  return issuers.size === 1 ? [...issuers][0] : undefined;
}

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
          {certification.name}
        </span>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {monthYear.format(new Date(certification.issued))}
        </span>
      </a>
    </li>
  );
}

export function CertificationList() {
  const sorted = [...certifications].sort((a, b) =>
    b.issued.localeCompare(a.issued),
  );
  const issuer = soleIssuer(sorted);

  return (
    <section aria-labelledby="certifications">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="certifications" className="text-sm font-medium">
          Certifications
          {issuer && (
            <span className="font-normal text-muted-foreground"> · {issuer}</span>
          )}
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
