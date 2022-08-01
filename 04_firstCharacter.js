function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) {
    return "";
  }
  let words = str.split(" ");
  let newStr = "";
  for (let i = 0; i < words.length; i++) {
    newStr += words[i][0];
  }
  return newStr;
}
