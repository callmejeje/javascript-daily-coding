function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let firstLetter, otherLetters;

  const strArr = str.split(" "); // ['you can DO it!']
  const newArr = []; // []

  for (let i = 0; i < strArr.length; i++) {
    firstLetter = strArr[i].substr(0, 1).toUpperCase();
    otherLetters = strArr[i].substring(1, strArr[i].length);
    newArr.push(firstLetter + otherLetters);
  }

  return newArr.join(" ");
}
