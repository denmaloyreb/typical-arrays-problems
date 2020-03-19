
exports.min = function min (array) {
  let minArr = 0;
  if (array.length==0 || !array) {
    return 0;
  }
  else {
  for (let i=0; i<array.length; i++) {
    if (array[i]<minArr) {
      minArr=array[i];
    }
  }
}
  return minArr;
}

exports.max = function max (array) {
  let maxArr = 0;
  for (let i=0; i<array.length; i++) {
    if (array[i]>maxArr) {
      maxArr=array[i];
    }
  }
  return maxArr;
}

exports.avg = function avg (array) {
  let  avgArr;
  let sum=0;
  for (let i=0; i<array.length; i++) {
    sum = sum+array[i];
    }
  avgArr = sum/array.length;
  return avgArr;
}
