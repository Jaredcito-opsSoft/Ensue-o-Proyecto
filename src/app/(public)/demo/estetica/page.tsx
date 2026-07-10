import { BusinessPage } from "@/components/business-page/BusinessPage";
import { getDemoBusinessBySlug } from "@/lib/demo-data";

export default function EsteticaDemoPage() {
  return <BusinessPage business={getDemoBusinessBySlug("bella-imagen-tuxtla")!} />;
}
