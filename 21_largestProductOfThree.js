const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] * arr[j] * arr[k] > max) {
          max = arr[i] * arr[j] * arr[k];
        }
      }
    }
  }

  return max;
};
