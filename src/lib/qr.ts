import QRCode from "qrcode";

export async function createQrSvg(value: string) {
  return QRCode.toString(value, {
    type: "svg",
    margin: 1,
    color: {
      dark: "#132033",
      light: "#F7F9FC",
    },
  });
}

export function createQrUrl(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${baseUrl}/api/qr/${slug}`;
}
