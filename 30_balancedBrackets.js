const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let big = [0, 0],
    midium = [0, 0],
    small = [0, 0];
  for (let i = 0; i < str.length; i++) {
    switch (true) {
      case /[\[({]/.test(str[i]):
        if (str[i] === "[") big[0]++;
        else if (str[i] === "{") midium[0]++;
        else small[0]++;
        break;
      case /[\])}]/.test(str[i]):
        if (str[i] === "]") {
          if (str[i - 1] === "(" || str[i - 1] === "{") return false;
          big[1]++;
        } else if (str[i] === "}") {
          if (str[i - 1] === "[" || str[i - 1] === "(") return false;
          midium[1]++;
        } else {
          if (str[i - 1] === "[" || str[i - 1] === "{") return false;
          small[1]++;
        }
        break;
    }
    if (big[0] < big[1] || midium[0] < midium[1] || small[0] < small[1])
      return false;
  }
  return big[0] === big[1] && midium[0] === midium[1] && small[0] === small[1]
    ? true
    : false;
};
