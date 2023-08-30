function isAlienSorted(words: string[], order: string): boolean {
  return (
    words.toString() ==
    words
      .sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
          if (order.indexOf(a[i]) > order.indexOf(b[i])) return 1;
          if (order.indexOf(a[i]) < order.indexOf(b[i])) return -1;
        }
        if (a.length > b.length) return 1;
        return -1;
      })
      .toString()
  );
}

// https://leetcode.com/problems/verifying-an-alien-dictionary/
