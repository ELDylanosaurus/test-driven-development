export function calcPoints(input: string): number {
  if (!input.trim()) return 0;

  const parts = input.trim().split(/\s+/).map(Number);

  if (parts.length % 2 !== 0) {
    throw new Error('Ungültige Eingabe: Multiplikator und Sektor müssen paarweise angegeben werden');
  }

  let total = 0;
  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parts[i];
    const sector = parts[i + 1];

    if (![1, 2, 3].includes(multiplier)) {
      throw new Error(`Ungültiger Multiplikator: ${multiplier}`);
    }

    if (sector < 0 || sector > 20) {
      throw new Error(`Ungültiger Sektor: ${sector}`);
    }

    total += multiplier * sector;
  }

  return total;
}

export function possibleCheckout(currentPoints: number): string | null {
  const remaining = 501 - currentPoints;

  if (remaining <= 0 || remaining % 2 !== 0) {
    return null;
  }

  const doubleSector = remaining / 2;

  if (doubleSector >= 1 && doubleSector <= 20) {
    return `Double ${doubleSector}`;
  }

  if (remaining === 50) {
    return 'Double Bull';
  }

  return null;
}
