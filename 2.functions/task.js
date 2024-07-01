function getArrayParams(...arr) {
    let min, max, sum;
    min = max = sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(arr[0], arr[i]);
        max = Math.max(arr[0], arr[i]);
        sum += arr[i];
    }
    sum = sum / arr.length;

    let obj = {};
    obj.min = min;
    obj.max = max;
    obj.avg = sum.toFixed(2);

    return obj;
}
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
