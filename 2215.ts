function findDifference(nums1: number[], nums2: number[]): number[][] {
  return [
    [...new Set(nums1.filter((i) => !new Set(nums2).has(i)))],
    [...new Set(nums2.filter((i) => !new Set(nums1).has(i)))],
  ];
}

//https://leetcode.com/problems/find-the-difference-of-two-arrays/
