const isAnagram = require('./anagram');

test("anagram function should exist", () => {
    expect(typeof isAnagram).toEqual('function');
  });

test('"cinema" is anagram of "iceman"', () => {
    expect(isAnagram("cinema", "iceman")).toBeTruthy();
})

test('"Dormitory" is anagram of "dirty room"', () => {
    expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
})

test('"Hello" is not anagram of "Aloha"', () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
})