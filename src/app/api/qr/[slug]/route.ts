import { createQrSvg } from "@/lib/qr";
import { appConfig } from "@/lib/constants";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svg = await createQrSvg(`${appConfig.baseUrl}/negocio/${slug}`);

  return new Response(svg, {
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
