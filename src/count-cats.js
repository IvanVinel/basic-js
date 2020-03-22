module.exports = function countCats(matrix) {
  if (matrix.length === 0) return 0;
  return matrix.reduce((acc, i) => {
    acc += i.reduce((res, item) => {
      if(item === '^^') return ++res;
      return res;
    },0)
    return acc;
  }, 0)
};
