export function createSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

export function isValidSlug(value: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

export function createUniqueSlug(name: string, existingSlugs: string[]) {
  const base = createSlug(name);
  if (!existingSlugs.includes(base)) return base;

  let index = 2;
  while (existingSlugs.includes(`${base}-${index}`)) index += 1;
  return `${base}-${index}`;
}
