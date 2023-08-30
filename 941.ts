function validMountainArray(arr: number[]): boolean {
  let isGoDown = false;
  if (arr.length < 3 || arr[0] > arr[1] || arr.at(-1)!! > arr.at(-2)!!)  return false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isGoDown = true;
    }
    if (arr[i] >= arr[i + 1] && !isGoDown) return false;
    if (arr[i] <= arr[i + 1] && isGoDown) return false;
  }
  return true;
}

// https://leetcode.com/problems/valid-mountain-array/description/
