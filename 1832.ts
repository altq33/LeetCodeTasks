function checkIfPangram(sentence: string): boolean {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let s of sentence) {
    alphabet = alphabet.replaceAll(s, "");
  }

  return !alphabet.length;
}

// https://leetcode.com/problems/check-if-the-sentence-is-pangram
