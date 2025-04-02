import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test("returns only seconds", () => {
    expect(formatDuration(33)).toBe("33s");
  });

  test("returns minutes and seconds", () => {
    expect(formatDuration(123)).toBe("2m3s");
    expect(formatDuration(500)).toBe("8m20s");
  });

  test("returns only hours", () => {
    expect(formatDuration(3600)).toBe("1h");
  });

  test("returns hours, minutes and seconds", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });

  test("returns 0s for zero input", () => {
    expect(formatDuration(0)).toBe("0s");
  });

  test("throws error for negative input", () => {
    expect(() => formatDuration(-10)).toThrow("Negative duration not allowed");
  });

  test("rounds floating-point seconds", () => {
    expect(formatDuration(59.6)).toBe("1m");
    expect(formatDuration(89.4)).toBe("1m29s");
  });
});
