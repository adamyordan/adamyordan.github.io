import { awards, type Award } from "@/data/awards";
import { Separator } from "@/components/ui/separator";

function AwardRow({ award }: { award: Award }) {
  const heading = (
    <span className="text-sm font-medium">
      {award.event}
      {award.team && (
        <span className="font-normal text-muted-foreground">
          {" "}
          as {award.team}
        </span>
      )}
    </span>
  );

  return (
    <li className="py-3">
      {award.url ? (
        <a
          href={award.url}
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 hover:underline"
        >
          {heading}
        </a>
      ) : (
        heading
      )}

      <p className="mt-1.5 text-sm text-foreground/90">
        {award.placements.join(" · ")}
      </p>

      {award.context && (
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {award.context}
        </p>
      )}
    </li>
  );
}

function AwardPhotos({ items }: { items: Award[] }) {
  const withPhotos = items.filter((award) => award.photo);
  if (withPhotos.length === 0) return null;

  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {withPhotos.map((award) => {
        const photo = award.photo!;
        return (
          <figure key={award.event}>
            {/* Plain <img>: the static export runs without the image optimizer,
                and these are already compressed at their display size. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full rounded-md border border-border object-cover saturate-[0.9] transition duration-300 hover:saturate-100 dark:brightness-95 dark:hover:brightness-100"
            />
            {photo.caption && (
              <figcaption className="mt-1.5 font-mono text-xs text-muted-foreground">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}

export function AwardList() {
  const sorted = [...awards].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <section aria-labelledby="awards">
      <h2 id="awards" className="text-sm font-medium">
        International awards
      </h2>

      <Separator className="mt-3" />

      <ul className="mt-3">
        {sorted.map((award) => (
          <AwardRow key={`${award.year}-${award.event}`} award={award} />
        ))}
      </ul>

      <AwardPhotos items={sorted} />
    </section>
  );
}
