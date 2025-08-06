const average = function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum / arr.length;
};

const analyzeArray = function (arr) {
  if (arr.length > 0) {
    let avg = average(arr);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    return { average: avg, min: min, max: max, length: length };
  } else {
    throw new console.error('Empty Array');
  }
};

analyzeArray([1, 8, 3, 4, 2, 6]);
module.exports = analyzeArray;
