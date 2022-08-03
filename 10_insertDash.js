function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  let strArr = str.split("");
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i - 1] % 2 && strArr[i] % 2) {
      strArr.splice(i, 0, "-");
    }
  }
  return strArr.join("");
}
