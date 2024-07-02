function getArrayParams(...arr) {
	let min, max, sum;
	if (arr.length === 0) min = max = sum = 0;

	min = max = sum = arr[0];
	for (let i = 1; i < arr.length; i++) {
		min = Math.min(min, arr[i]);
		max = Math.max(max, arr[i]);
		sum += arr[i];
	}
	let avg = sum / arr.length;

	return {
		min: min,
		max: max,
		avg: +avg.toFixed(2)
	};
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
	min = max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		min = Math.min(min, arr[i]);
		max = Math.max(max, arr[i]);
	}
	diffMinMax = max - min;
	return diffMinMax;
}

function differenceEvenOddWorker(...arr) {
	let sumEven = 0;
	let sumOdds = 0;
	let dif;
	if (arr.length === 0) dif = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) sumEven += arr[i];
		else sumOdds += arr[i];
	}
	dif = sumEven - sumOdds;
	return dif;
}

function averageEvenElementsWorker(...arr) {
	let sum = 0;
	let avg = 0;
	let counter = 0;

	if (arr.length === 0) avg = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sum += arr[i];
			counter++;
		}
	}
	avg = sum / counter;
	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	if (arrOfArr.length === 0) maxWorkerResult = 0;
	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) maxWorkerResult = result;
	}
	return maxWorkerResult;
}