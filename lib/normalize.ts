export function normalizeText(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, " ");
}

export function safeText(value: string | undefined | null) {
  return (value ?? "").trim();
}
