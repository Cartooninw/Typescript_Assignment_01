import { merge } from "./Assignment";
import { describe, test, expect } from "vitest";


describe("merge()", () => {
  test("merges typical inputs correctly", () => {
    const c1 = [0, 2, 2, 10];
    const c2 = [1, 3, 7];
    const c3 = [9, 8, 8, 4, 0]; 

    const out = merge(c1, c2, c3);

    expect(out).toEqual([0, 0, 1, 2, 2, 3, 4, 7, 8, 8, 9, 10]);
  });

  test("handles empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [1, 2], [])).toEqual([1, 2]);
    expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("handles negatives and duplicates", () => {
    const c1 = [-5, -2, 0];
    const c2 = [-3, -3, 4];
    const c3 = [10, 4, -1, -1, -6]; 

    const out = merge(c1, c2, c3);

    expect(out).toEqual([-6, -5, -3, -3, -2, -1, -1, 0, 4, 4, 10]);
  });


  test("works on your example-style case (2 asc, 1 desc)", () => {
    const collection_1 = [15, 32, 33, 35, 55];
    const collection_2 = [14, 25, 36, 49, 64, 81, 100];
    const collection_3 = [101, 96, 82, 75, 64, 58]; 

    const out = merge(collection_1, collection_2, collection_3);

    expect(out).toEqual([14, 15, 25, 32, 33, 35, 36, 49, 55, 58, 64, 64, 75, 81, 82, 96, 100, 101]);
  });



  test("does not mutate inputs", () => {
    const c1 = [1, 2, 3];
    const c2 = [2, 4];
    const c3 = [9, 7, 5];

    const c1Copy = [...c1];
    const c2Copy = [...c2];
    const c3Copy = [...c3];

    merge(c1, c2, c3);

    expect(c1).toEqual(c1Copy);
    expect(c2).toEqual(c2Copy);
    expect(c3).toEqual(c3Copy);
  });
});