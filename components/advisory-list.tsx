import { advisories, type Advisory, type Severity } from "@/data/cves";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const severityDot: Record<Severity, string> = {
  critical: "bg-red-600 dark:bg-red-400",
  high: "bg-orange-600 dark:bg-orange-400",
  moderate: "bg-amber-600 dark:bg-amber-400",
  low: "bg-muted-foreground",
};

const monthDay = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

function identifier(advisory: Advisory) {
  return advisory.cve ?? advisory.ghsa ?? advisory.product;
}

/** `published` may be "YYYY", "YYYY-MM" or "YYYY-MM-DD"; only format a full date. */
function formatDate(published: string) {
  return published.length === 10
    ? monthDay.format(new Date(published))
    : undefined;
}

function groupByYear(items: Advisory[]) {
  const sorted = [...items].sort((a, b) =>
    b.published.localeCompare(a.published),
  );

  const years = new Map<string, Advisory[]>();
  for (const advisory of sorted) {
    const year = advisory.published.slice(0, 4);
    const bucket = years.get(year);
    if (bucket) bucket.push(advisory);
    else years.set(year, [advisory]);
  }
  return [...years];
}

function AdvisoryBody({ advisory }: { advisory: Advisory }) {
  const meta = [
    advisory.pkg,
    advisory.ecosystem,
    formatDate(advisory.published),
    advisory.coCredited ? "co-credited" : undefined,
  ].filter(Boolean);

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        <span className="font-mono text-sm text-foreground">
          {identifier(advisory)}
        </span>
        {advisory.severity && (
          <Badge
            variant="outline"
            className="gap-1.5 px-1.5 py-0 text-[0.7rem] font-normal text-muted-foreground"
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                severityDot[advisory.severity],
              )}
              aria-hidden
            />
            {advisory.severity}
            {advisory.cvss !== undefined && ` ${advisory.cvss.toFixed(1)}`}
          </Badge>
        )}
        {advisory.cvePending && (
          <Badge
            variant="outline"
            className="border-dashed px-1.5 py-0 text-[0.7rem] font-normal text-muted-foreground"
          >
            CVE pending
          </Badge>
        )}
      </div>

      <p className="mt-1.5 text-sm text-foreground/90 group-hover:text-foreground">
        <span className="font-medium">{advisory.product}</span>
        {advisory.title ? (
          <>
            <span className="text-muted-foreground"> — </span>
            {advisory.title}
          </>
        ) : (
          <span className="text-muted-foreground italic">
            {" "}
            — details not public yet
          </span>
        )}
      </p>

      {meta.length > 0 && (
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {meta.join(" · ")}
        </p>
      )}
    </>
  );
}

function AdvisoryRow({ advisory }: { advisory: Advisory }) {
  const padding = "-mx-3 block rounded-md px-3 py-3";

  // Entries without a public advisory page render as plain text, not a link.
  if (!advisory.url) {
    return (
      <li className={padding}>
        <AdvisoryBody advisory={advisory} />
      </li>
    );
  }

  return (
    <li>
      <a
        href={advisory.url}
        target="_blank"
        rel="noreferrer"
        className={cn(
          padding,
          "group transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:outline-none",
        )}
      >
        <AdvisoryBody advisory={advisory} />
      </a>
    </li>
  );
}

export function AdvisoryList() {
  // Embargoed advisories stay out of the page until they are disclosed.
  const published = advisories.filter((advisory) => !advisory.embargoed);
  const years = groupByYear(published);

  return (
    <section aria-labelledby="advisories">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="advisories" className="text-sm font-medium">
          Security advisories
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          {published.length}
        </span>
      </div>

      <Separator className="mt-3" />

      {years.map(([year, items]) => (
        <div key={year} className="mt-8 first:mt-6">
          <h3 className="font-mono text-xs text-muted-foreground">{year}</h3>
          <ul className="mt-1">
            {items.map((advisory) => (
              <AdvisoryRow
                key={advisory.cve ?? advisory.ghsa}
                advisory={advisory}
              />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
