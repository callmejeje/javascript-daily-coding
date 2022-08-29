const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  base = base.sort((a, b) => a - b);
  sample = sample.sort((a, b) => a - b);
  for (let i = 0; i < sample.length; i++) {
    // 부분집합 크기만큼 반복
    if (base.includes(sample[i])) {
      base.shift();
    } else {
      return false;
    }
  }
  return true;
};
