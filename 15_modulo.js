function modulo(num1, num2) {
  // 20, 3
  // TODO: 여기에 코드를 작성합니다.
  if (num1 === 0) {
    return 0;
  }
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  }
  while (num1 >= num2) {
    num1 -= num2; // num1 = num1 - num2; // num1 = 20-3, 17-3, 14-3, ..., 5-3, 2>3일 때 빠져나옴
  }

  return num1;
}
