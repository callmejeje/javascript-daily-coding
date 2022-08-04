function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let longLen = 0;
  const longIdx = arr.reduce((acc, el, idx) => {
    if (el.length >= longLen) {
      longLen = shortLen = el.length;
      acc = idx;
      return acc;
    }
    return acc;
  }, longLen);

  arr.splice(longIdx, 1);

  const shortIdx = arr.reduce((acc, el, idx) => {
    if (el.length <= shortLen) {
      shortLen = el.length;
      acc = idx;
      return acc;
    }
    return acc;
  }, shortLen);

  arr.splice(shortIdx, 1);

  return arr;
}
