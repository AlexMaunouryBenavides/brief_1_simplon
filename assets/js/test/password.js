export async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode comme (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // fait le condensé
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convertit le buffer en tableau d'octet
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convertit le tableau en chaîne hexadélimale
  return hashHex;
}
