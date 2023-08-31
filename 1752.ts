function check(nums: number[]): boolean {
  const last = nums.length - 1;
  let isRotated = false;

  for (let i = 1; i <= last; i++) {
    if (nums[i] < nums[i - 1]) {
      if (!isRotated) {
        isRotated = true;
      } else {
        return false;
      }
    }
  }

  return !isRotated || nums[last] <= nums[0];
}

//https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
