function reformatNumber(number: string): string {
  let trimmedNumber = number.replaceAll(/ |-/g, "");
  let result = "";
  while (trimmedNumber.length > 4) {
    let threeGroup = trimmedNumber.slice(0, 3);
    result += threeGroup + "-";
    trimmedNumber = trimmedNumber.replace(threeGroup, "");
  }
  switch (trimmedNumber.length) {
    case 2:
    case 3:
      result += trimmedNumber;
      break;
    case 4:
      result += trimmedNumber.slice(0, 2) + "-" + trimmedNumber.slice(-2);
      break;
  }
  return result;
}

//https://leetcode.com/problems/reformat-phone-number/
