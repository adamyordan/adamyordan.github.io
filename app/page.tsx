import { SiteHeader } from "@/components/site-header";
import { AdvisoryList } from "@/components/advisory-list";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20 sm:py-28">
      <SiteHeader />
      <div className="mt-16">
        <AdvisoryList />
      </div>
    </main>
  );
}
