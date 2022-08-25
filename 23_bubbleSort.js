const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let temp;
  let prevArr;
  let same;
  for (let n = 0; n < arr.length; n++) {
    prevArr = arr.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    same = true;
    for (let i = 0; i < arr.length; i++) {
      if (prevArr[i] !== arr[i]) {
        same = false;
        break;
      }
    }
    if (same) break;
  }
  return arr;
};
