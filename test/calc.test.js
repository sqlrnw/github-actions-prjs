const { add, div } = require("../src/calc");

test("add works", () => {
  expect(add(2, 3)).toBe(5);
});

test("div works", () => {
  expect(div(10, 2)).toBe(5);
});

test("div by zero throws", () => {
  expect(() => div(10, 0)).toThrow("Division by zero");
});

