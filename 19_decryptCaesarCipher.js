function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = "";
  if (str.length === 0) {
    return "";
  }
  for (let i = 0; i < str.length; i++) {
    // if (/[A-Z]/.test(str[i])) {
    //   if (str[i].charCodeAt() - secret < 65) {
    //     answer += String.fromCharCode((str[i].charCodeAt() - secret) + 26);
    //   }
    //   else {
    //     answer += String.fromCharCode((str[i].charCodeAt() - secret));
    //   }
    // }
    // else if (/[a-z]/.test(str[i])) {
    //   if (str[i].charCodeAt() - secret < 97) {
    //     answer += String.fromCharCode((str[i].charCodeAt() - secret) + 26);
    //   }
    //   else {
    //     answer += String.fromCharCode((str[i].charCodeAt() - secret));
    //   }
    // }
    if (str[i] !== " ") {
      answer += String.fromCharCode(
        ((((str[i].charCodeAt() - 97) % 97) - secret + 26) % 26) + 97
      );
    } else {
      answer += str[i];
    }
  }

  return answer;
}
