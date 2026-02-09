
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const a = collection_1;
  const b = collection_2;
  const c = collection_3;

 
  let i = 0;
  let j = 0;
  let k = c.length - 1;

  const result = new Array<number>(a.length + b.length + c.length);
  let r = 0;

  while (i < a.length || j < b.length || k >= 0) {
    const nextA = i < a.length ? a[i] : Number.POSITIVE_INFINITY;
    const nextB = j < b.length ? b[j] : Number.POSITIVE_INFINITY;
    const nextC = k >= 0 ? c[k] : Number.POSITIVE_INFINITY;

    if (nextA <= nextB && nextA <= nextC) {
      result[r++] = nextA;
      i++;
    } else if (nextB <= nextA && nextB <= nextC) {
      result[r++] = nextB;
      j++;
    } else {
      result[r++] = nextC;
      k--;
    }
  }

  return result;
}
