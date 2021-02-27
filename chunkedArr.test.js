const chunk = require("./chunkedArr");

test("chunk function should exist", () => {
  expect(chunk).toBeDefined();
});

test("reverse an array of 10 numbers to a length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  expect(chunk(numbers, len)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ]);
});
