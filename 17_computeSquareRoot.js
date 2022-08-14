function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 바벨로니아 점화식 : x_n+1 = 1/2 * (x_n + num / x_n)

  let x = 1;

  for (let i = 2; i <= Math.ceil(num / 2); i++) {
    // 최적의 x_0 찾기
    if (i * i === num) {
      return i;
    } else if (i * i > num) {
      break;
    }
    x = i;
  }

  while (Number((x ** 2).toFixed(2)) !== num) {
    // x제곱의 소수점 2자리수까지의 근사값이 num이랑 같지 않을 때까지 반복
    x = (1 / 2) * (x + num / x);
  }

  // for (let i = 0; i < 100; i++) { // 100번 반복
  //   x = 1/2 * (x + (num / x));
  // }

  return Number(x.toFixed(2));
}
