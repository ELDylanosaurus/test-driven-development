export function isValid(isbn: string): boolean {
  const cleaned = isbn.replace(/[^0-9]/g, '');

  if (cleaned.length !== 13) return false;

  if (/^(\d)\1{12}$/.test(cleaned)) return false;

  const digits = cleaned.split('').map(Number);

  const checksum = digits
    .slice(0, 12)
    .reduce((sum, digit, index) => {
      return sum + digit * (index % 2 === 0 ? 1 : 3);
    }, 0);

  const checkDigit = (10 - (checksum % 10)) % 10;

  return digits[12] === checkDigit;
}
