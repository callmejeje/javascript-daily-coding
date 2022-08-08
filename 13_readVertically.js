function readVertically(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let vertical = "";
  let longest = arr.reduce((acc, el) => {
    if (el.length > acc) {
      acc = el.length;
      return acc;
    }
    return acc;
  }, 0);

  for (let i = 0; i < longest; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) {
        vertical += arr[j][i];
      }
    }
  }

  return vertical;
}
