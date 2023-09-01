function missingNumber(nums: number[]): number {
  let sortArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i] + 1 !== sortArr[i + 1]) return sortArr[i] + 1;
  }
  if (sortArr[0] != 0) return 0;
  return sortArr.at(-1)!! + 1;
}

//https://leetcode.com/problems/missing-number/
