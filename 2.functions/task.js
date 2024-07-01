function getArrayParams(...arr) {
  let min, max, sum;
  if (arr.length === 0) min = max = sum = 0;
  
  min = max = sum = arr[0];
  for(let i = 1; i < arr.length; i++){
      min = Math.min(arr[0], arr[i]);
      max = Math.max(arr[0], arr[i]);
      sum += arr[i];
  }
  let avg = sum/arr.length;
  
  return { min: min, max: max, avg: avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min, max, diffMinMax;
  if (arr.length === 0) min = max = diffMinMax = 0;
  for (let i = 1; i < arr.length; i++){
    min = Math.min(arr[0], arr[i]);
    max = Math.max(arr[0], arr[i]);
  }
  diffMinMax = max - min;
  return diffMinMax;
}

function differenceEvenOddWorker(...arr) {
  let sumEven, sumOdd;
  sumEven = sumOdd = 0;
  if (arr.length === 0) sumEven = sumOdd = 0;
  for(let i = 0; i < arr.length; i+2) sumOdd += arr[i];
  for(let i = 1; i < arr.length; i+2) sumEven += arr[i];
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    let avg = 0;
    let counterAvg = 0;
    if (arr.length === 0) avg = 0;
    for(let i = 1; i < arr.length; i+2){
      avg += arr[i];
      counterAvg++;
    }
    avg = avg/counterAvg;
    return avg;
}

function makeWork (arrOfArr, func) {
    let maxWorkerResult = func(arrOfArr[0]);
    if (arrOfArr.length === 0) maxWorkerResult = 0;
    for(let i = 0; i < arrOfArr.length; i++){
      let result = func(...arrOfArr[i]);
      if (result > maxWorkerResult) maxWorkerResult = result;
    }
    return maxWorkerResult;
}
