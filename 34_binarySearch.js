const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  function bsRecursion(start, end) {
    if (start > end) return -1;

    let mid = Math.floor((end - start) / 2) + start;
    if (arr[mid] === target) return mid;
    else if (start === end) return -1;

    return arr[mid] > target ? bsRecursion(0, mid) : bsRecursion(mid + 1, end);
  }

  return bsRecursion(0, arr.length);
};
