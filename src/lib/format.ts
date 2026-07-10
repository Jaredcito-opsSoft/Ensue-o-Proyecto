export function formatPrice(value?: string | null) {
  if (!value) return "Cotizar";
  return value;
}

export function formatDate(value: Date | string) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function formatCategory(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
