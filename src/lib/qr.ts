import QRCode from "qrcode";

export async function createQrSvg(value: string) {
  return QRCode.toString(value, {
    type: "svg",
    margin: 1,
    color: {
      dark: "#15100E",
      light: "#F3EAD8",
    },
  });
}

export function createQrUrl(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${baseUrl}/api/qr/${slug}`;
}
