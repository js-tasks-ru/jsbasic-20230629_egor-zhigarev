function camelize(str) {
  let result = str.split('-');
  result.forEach((item, index) => {
    if (index !== 0) {
      result[index] = item[0].toUpperCase() + item.slice(1);
    }
  });
  return result.join('');
}