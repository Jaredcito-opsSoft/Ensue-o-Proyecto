import { BusinessPage } from "@/components/business-page/BusinessPage";
import { getDemoBusinessBySlug } from "@/lib/demo-data";

export default function ComidaDemoPage() {
  return <BusinessPage business={getDemoBusinessBySlug("sazon-coleta")!} />;
}
