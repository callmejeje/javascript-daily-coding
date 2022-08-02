function ABCheck(str) {
  // code goes here
  str = str.toLowerCase();

  for (let i = 0; i < str.length - 4; i++) {
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    } else if (str[i] === "b" && str[i + 4] === "a") {
      return true;
    }
  }

  return false;
}
