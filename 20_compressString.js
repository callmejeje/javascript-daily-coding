function rightAnswer(answer, count, before) {
  if (count === 1) {
    answer += before;
  } else if (count === 2) {
    answer += before + before;
  } else if (count >= 3) {
    answer += count + before;
  }
  return answer;
}

function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = "";
  let count = 1;
  let before = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else if (str[i] !== str[i - 1]) {
      answer = rightAnswer(answer, count, before);
      count = 1;
    }

    before = str[i];

    if (i === str.length - 1) {
      answer = rightAnswer(answer, count, before);
    }
  }

  return answer;
}
