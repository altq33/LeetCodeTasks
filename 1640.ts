function canFormArray(arr: number[], pieces: number[][]): boolean {
  // Офк надо было юзать хеш для быстрых проверок, а не массив
  let joinedPieces = pieces.map((el) => el.join(""));
  let elementsJoin = "";
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    if (!flag && joinedPieces.includes(elementsJoin + `${arr[i]}`)) {
      flag = true;
      elementsJoin = "";
      continue;
    }
    if (flag && joinedPieces.includes(`${arr[i]}`)) {
      continue;
    }
    flag = false;
    elementsJoin += `${arr[i]}`;
  }
  return flag;
}

// https://leetcode.com/problems/check-array-formation-through-concatenation/
