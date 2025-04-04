import { calcPoints, possibleCheckout } from './darts';

describe('calcPoints', () => {
  test('Berechnet Punkte korrekt', () => {
    expect(calcPoints('3 20 1 17 2 4')).toBe(85);
  });

  test('Berechnet Punkte korrekt', () => {
    expect(calcPoints('2 15 1 18 3 19')).toBe(105);
  });

  test('Ein Wurf daneben', () => {
    expect(calcPoints('3 20 1 5')).toBe(65);
  });

  test('Leerer String', () => {
    expect(calcPoints('')).toBe(0);
  });

  test('Ungültige Eingabe: ungerade Anzahl Zahlen', () => {
    expect(() => calcPoints('3 20 1')).toThrow();
  });

  test('Ungültiger Multiplikator', () => {
    expect(() => calcPoints('4 20 1 17')).toThrow('Ungültiger Multiplikator: 4');
  });

  test('Ungültiger Sektor', () => {
    expect(() => calcPoints('2 25')).toThrow('Ungültiger Sektor: 25');
  });
});

describe('possibleCheckout', () => {
  test('24 Punkte verbleiben → Double 12', () => {
    expect(possibleCheckout(477)).toBe('Double 12');
  });

  test('Ungültig bei ungerader Punktzahl', () => {
    expect(possibleCheckout(480)).toBeNull(); 
  });

  test('Ungültig bei mehr als Double 20', () => {
    expect(possibleCheckout(441)).toBeNull(); 
  });

  test('Double Bull als Spezialfall (50 Punkte)', () => {
    expect(possibleCheckout(451)).toBe('Double Bull');
  });

  test('Bereits bei 501 Punkten → kein Checkout möglich', () => {
    expect(possibleCheckout(501)).toBeNull();
  });

  test('Negative Punkte (unmöglich)', () => {
    expect(possibleCheckout(510)).toBeNull();
  });
});
