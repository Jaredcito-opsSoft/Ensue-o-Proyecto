import { MotionTicker } from "@/components/motion/MotionTicker";

const signals = [
  "Mini pagina",
  "WhatsApp directo",
  "Codigo QR",
  "Catalogo claro",
  "Ubicacion",
  "Horarios",
  "Fotos reales",
  "Un solo link",
];

export function SignalTickerSection() {
  return <MotionTicker items={signals} />;
}
