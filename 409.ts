function longestPalindrome(s: string): number {
  const map = new Map<string, number>();
  let result = 0;
  let adding = 0;

  for (let c of s) {
    map.has(c) ? map.set(c, map.get(c)!! + 1) : map.set(c, 1);
  }
  for (let value of map.values()) {
    if (value % 2 == 0) {
      result += value;
    } else {
      result += --value;
      adding = 1;
    }
  }

  return result + adding;
}

// https://leetcode.com/problems/longest-palindrome/
