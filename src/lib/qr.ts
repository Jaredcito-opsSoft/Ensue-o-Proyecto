import QRCode from "qrcode";

export async function createQrSvg(value: string) {
  return QRCode.toString(value, {
    type: "svg",
    margin: 1,
    color: {
      dark: "#171717",
      light: "#F7F3EC",
    },
  });
}

export function createQrUrl(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${baseUrl}/api/qr/${slug}`;
}
