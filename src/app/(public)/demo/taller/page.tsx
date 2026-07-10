import { BusinessPage } from "@/components/business-page/BusinessPage";
import { getDemoBusinessBySlug } from "@/lib/demo-data";

export default function TallerDemoPage() {
  return <BusinessPage business={getDemoBusinessBySlug("celfix-tuxtla")!} />;
}
