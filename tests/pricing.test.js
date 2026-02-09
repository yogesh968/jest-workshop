/**
 * @jest-environment node
 */
const { calculateFinalAmount } = require("../src/pricing");

test("no coupon case", () => {
  expect(calculateFinalAmount(100, null)).toBe(100);
});

test("SAVE10 coupon", () => {
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90);
});

test("FLAT50 boundary case", () => {
  expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
});

test("invalid subtotal throws error", () => {
  expect(() => calculateFinalAmount(-100, "SAVE10")).toThrow("Invalid subtotal");
});

test("case-insensitive coupon", () => {
  expect(calculateFinalAmount(100, "save10")).toBe(90);
});



