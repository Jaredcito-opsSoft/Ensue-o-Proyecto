import type { Business } from "@/types";
import { BusinessFooter } from "./BusinessFooter";
import { BusinessGallery } from "./BusinessGallery";
import { BusinessHero } from "./BusinessHero";
import { BusinessHours } from "./BusinessHours";
import { BusinessInfo } from "./BusinessInfo";
import { BusinessItems } from "./BusinessItems";
import { BusinessLocation } from "./BusinessLocation";
import { BusinessQR } from "./BusinessQR";
import { BusinessSocials } from "./BusinessSocials";
import { MobileActionBar } from "./MobileActionBar";

export function BusinessPage({ business }: { business: Business }) {
  return (
    <main>
      <BusinessHero business={business} />
      <BusinessInfo business={business} />
      <BusinessItems business={business} />
      <BusinessGallery business={business} />
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <BusinessHours business={business} />
          <BusinessLocation business={business} />
          <BusinessSocials business={business} />
          <BusinessQR business={business} />
        </div>
      </section>
      <BusinessFooter business={business} />
      <MobileActionBar business={business} />
    </main>
  );
}
