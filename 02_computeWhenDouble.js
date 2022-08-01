function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  let firstMoney = (nowMoney = 100);

  let year = 0;
  while (nowMoney < firstMoney * 2) {
    nowMoney += nowMoney * interestRate * 0.01;
    year++;
  }

  return year;
}
