import { SiteHeader } from "@/components/site-header";
import { AdvisoryList } from "@/components/advisory-list";
import { AwardList } from "@/components/award-list";
import { CertificationList } from "@/components/certification-list";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20 sm:py-28">
      <SiteHeader />
      <div className="mt-16">
        <AdvisoryList />
      </div>
      <div className="mt-16">
        <AwardList />
      </div>
      <div className="mt-16">
        <CertificationList />
      </div>
    </main>
  );
}
