function replaceDigits(s: string): string {
  let sArr = s.split("");
  for (let i = 1; i < s.length; i++) {
    if (i % 2 == 1) {
      sArr[i] = String.fromCharCode(s[i - 1].charCodeAt(0) + +s[i]);
    }
  }
  return sArr.join("");
}

// https://leetcode.com/problems/replace-all-digits-with-characters/description/
