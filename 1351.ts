function countNegatives(grid: number[][]): number {
  return (
    grid
      .map((el) => el.join(""))
      .join("")
      .split("-").length - 1
  );
}

// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
