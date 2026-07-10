import { notFound } from "next/navigation";
import { BusinessPage } from "@/components/business-page/BusinessPage";
import { getPublishedBusinessBySlug } from "@/features/businesses/queries";

export default async function PublicBusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const business = await getPublishedBusinessBySlug(slug);

  if (!business) notFound();

  return <BusinessPage business={business} />;
}
