function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  let cursor1 = 0;
  let cursor2 = 0;
  let i = 0;
  while (i < word1.length + word2.length) {
    if (i % 2 == 0) {
      if (word1[cursor1]) {
        result += word1[cursor1];
        cursor1++;
      } else {
        result += word2[cursor2];
        cursor2++;
      }
    } else {
      if (word2[cursor2]) {
        result += word2[cursor2];
        cursor2++;
      } else {
        result += word1[cursor1];
        cursor1++;
      }
    }
    i++;
  }
  return result;
}

//https://leetcode.com/problems/merge-strings-alternately/description/
