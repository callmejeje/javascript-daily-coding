function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  str = str.toLowerCase();
  let exceptI;

  for (let i = 0; i < str.length; i++) {
    exceptI = str.slice(0, i) + str.slice(i + 1, str.length);
    console.log(exceptI);
    if (exceptI.includes(str[i])) {
      return false;
    }
  }

  return true;
}
