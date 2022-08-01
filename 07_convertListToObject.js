function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = {};

  if (arr.length === 0) {
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length != 0 && !(arr[i][0] in result))
      result[arr[i][0]] = arr[i][1];
  }

  return result;
}
