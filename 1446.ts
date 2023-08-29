function maxPower(s: string): number {
  let curPow = 1;
  let power = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      curPow += 1;
      power = Math.max(power, curPow);
    } else {
      curPow = 1;
    }
  }
  return power;
}

// https://leetcode.com/problems/consecutive-characters/description/
