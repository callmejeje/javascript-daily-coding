function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr.slice(0, i).reduce((pre, cur) => pre + cur)) {
      return false;
    }
  }
  return true;
}
