import { isValid } from './isbn13';

describe('isValid', () => {
  test('gültige ISBN-13', () => {
    expect(isValid('9780306406157')).toBe(true);
    expect(isValid('9781861972712')).toBe(true);
    expect(isValid('9791234567896')).toBe(true); // gültige ISBN mit 979
  });

  test('ungültige ISBN-13 falsche Prüfziffer', () => {
    expect(isValid('9780306406158')).toBe(false);
    expect(isValid('9791234567890')).toBe(false);
  });

  test('ungültig zu kurz', () => {
    expect(isValid('97803064061')).toBe(false);
  });

  test('ungültig zu lange', () => {
    expect(isValid('9780306406157000')).toBe(false);
  });

  test('gültig trotz Leerzeichen oder Bindestrichen', () => {
    expect(isValid('978-0-306-40615-7')).toBe(true);
    expect(isValid('978 0 306 40615 7')).toBe(true);
  });

  test('ungültige Zeichen', () => {
    expect(isValid('97803064061A7')).toBe(false);
  });

  test('ISBN mit 0 ungültig', () => {
    expect(isValid('0000000000000')).toBe(false);
  });  
});
