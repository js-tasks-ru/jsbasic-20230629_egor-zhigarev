function getMinMax(str) {
  let max = 0;
  let min = 0;
  let result = str.split(' ');
  for (let key of result) {
    let parseToken = parseFloat(key);
    if (!isNaN(parseToken)) {
      if (parseToken > max) {
        max = parseToken;
      }
      if (parseToken < min) {
        min = parseToken;
      }
    }
  }
  return {min, max};
}