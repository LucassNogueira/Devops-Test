const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE

  test("shuffleArray should return an array", () => {
    expect(shuffleArray).toBe(shuffleArray);
  });

  test("length is the same as length of array fix commit", () => {
    const length = shuffleArray.length;
    expect(length).toEqual(shuffleArray.length);
  });
});
