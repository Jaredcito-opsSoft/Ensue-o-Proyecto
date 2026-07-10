export function cleanWhatsAppNumber(value: string) {
  return value.replace(/\D/g, "");
}

export function isValidWhatsApp(value: string) {
  const number = cleanWhatsAppNumber(value);
  return number.length >= 10 && number.length <= 15;
}

export function createWhatsAppLink(phone: string, message: string) {
  const number = cleanWhatsAppNumber(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
}
