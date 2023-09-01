function moveZeroes(nums: number[]): void {
  let i = 0;
  let nl = nums.length;
  while (i < nl) {
    if (!nums[i]) {
      nums.push(nums.splice(i, 1)[0]);
      nl--;
      i--;
    }
    i++;
  }
}

console.log(moveZeroes([0, 0, 1]));

// https://leetcode.com/problems/move-zeroes/
// [1, 2, 3, 0, 0]
