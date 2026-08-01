import { ImageResponse } from "next/og";
import { atriaSite } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ededeB",
          color: "#111214",
          padding: "58px 64px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "22px",
            border: "1px solid #d9d7d3",
            borderRadius: "28px",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "#111214",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: "38px" }}>
            {atriaSite.name}
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              border: "1px solid #d9d7d3",
              borderRadius: "999px",
              padding: "12px 20px",
              fontSize: "16px",
              color: "#626267",
            }}
          >
            Estudio digital
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "920px" }}>
          <div
            style={{
              display: "flex",
              color: "#ef5a2f",
              fontSize: "18px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Diseño y tecnología para negocios
          </div>
          <div
            style={{
              marginTop: "18px",
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: "74px",
              lineHeight: 1.02,
              letterSpacing: "0",
            }}
          >
            Creamos el lugar digital donde tu negocio puede crecer.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #d9d7d3",
            paddingTop: "22px",
            color: "#626267",
            fontSize: "17px",
          }}
        >
          <div style={{ display: "flex" }}>Atria Web · Ensueño Momentos · Soluciones digitales</div>
          <div style={{ display: "flex", color: "#ef5a2f", fontWeight: 700 }}>
            Tuxtla Gutiérrez · Atención remota
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );
}
