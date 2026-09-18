"use client";

import { useRef, useState } from "react";

import { advisories, type Advisory, type Severity } from "@/data/cves";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/** Advisories shown per page. */
const PER_PAGE = 10;

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

/**
 * Newest year first, and within a year the assigned CVEs come before the ones
 * still waiting on an id, each block newest first.
 */
function compareAdvisories(a: Advisory, b: Advisory) {
  return (
    b.published.slice(0, 4).localeCompare(a.published.slice(0, 4)) ||
    Number(!a.cve) - Number(!b.cve) ||
    b.published.localeCompare(a.published)
  );
}

/** Expects `items` already ordered by {@link compareAdvisories}. */
function groupByYear(items: Advisory[]) {
  const years = new Map<string, Advisory[]>();
  for (const advisory of items) {
    const year = advisory.published.slice(0, 4);
    const bucket = years.get(year);
    if (bucket) bucket.push(advisory);
    else years.set(year, [advisory]);
  }
  return [...years];
}

function chunk(items: Advisory[], size: number) {
  const pages: Advisory[][] = [];
  for (let i = 0; i < items.length; i += size)
    pages.push(items.slice(i, i + size));
  return pages;
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
  const sorted = [...published].sort(compareAdvisories);
  const pages = chunk(sorted, PER_PAGE);

  const [page, setPage] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);

  function goTo(next: number) {
    setPage(next);
    // Jump back up when the list has been scrolled past the heading.
    const top = headingRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) headingRef.current?.scrollIntoView();
  }

  return (
    <section aria-labelledby="advisories">
      <h2 ref={headingRef} id="advisories" className="text-sm font-medium">
        Security Advisory Credits
      </h2>

      <Separator className="mt-3" />

      {/*
       * Every page is rendered, and the inactive ones are hidden, so the
       * static export ships the full list rather than just the first page.
       */}
      {pages.map((items, index) => (
        <div key={index} className={cn(index !== page && "hidden")}>
          {groupByYear(items).map(([year, yearItems]) => (
            <div key={year} className="mt-8 first:mt-6">
              <h3 className="font-mono text-xs text-muted-foreground">
                {year}
              </h3>
              <ul className="mt-1">
                {yearItems.map((advisory) => (
                  <AdvisoryRow
                    key={advisory.cve ?? advisory.ghsa}
                    advisory={advisory}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      {pages.length > 1 && (
        <nav
          aria-label="Advisory pages"
          className="mt-8 flex items-center justify-between gap-4"
        >
          <Button
            variant="ghost"
            size="sm"
            disabled={page === 0}
            onClick={() => goTo(page - 1)}
          >
            Previous
          </Button>

          <p
            aria-live="polite"
            className="font-mono text-xs text-muted-foreground"
          >
            Page {page + 1} of {pages.length}
          </p>

          <Button
            variant="ghost"
            size="sm"
            disabled={page === pages.length - 1}
            onClick={() => goTo(page + 1)}
          >
            Next
          </Button>
        </nav>
      )}
    </section>
  );
}
