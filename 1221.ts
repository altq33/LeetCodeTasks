function balancedStringSplit(s: string): number {
  let count = 0;
  let balance = s[0] == "L" ? 1 : -1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == "L") {
      balance++;
    } else {
      balance--;
    }
    if (!balance) count++;
  }
  return count;
}

// https://leetcode.com/problems/split-a-string-in-balanced-strings