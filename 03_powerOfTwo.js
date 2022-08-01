function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num === 1) {
    return true;
  }
  while (num > 1) {
    num = num / 2;
  }
  if (num === 1) {
    return true;
  } else {
    return false;
  }
}
