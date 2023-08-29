function kWeakestRows(mat: number[][], k: number): number[] {
  return mat
    .map((el, i) => [...el, i])
    .sort((a, b) =>
      a.slice(0, -1).join("").split("1").length - 1 ==
      b.slice(0, -1).join("").split("1").length - 1
        ? a.at(-1)!! - b.at(-1)!!
        : a.slice(0, -1).join("").split("1").length -
          1 -
          (b.slice(0, -1).join("").split("1").length - 1)
    )
    .map((el) => el.at(-1)!!)
    .slice(0, k);
}

//https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/
// Фановый однострочник
