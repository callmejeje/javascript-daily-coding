function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) {
    return 0;
  }

  str = str.replace(/ /g, "");
  let sum = 0;

  for (i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      sum += Number(str[i]);
    }
  }
  str = str.replace(/[0-9]/g, "");

  return Math.round(sum / str.length);
}
