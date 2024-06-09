"use strict"
function solveEquation(a, b, c) {
  let arr = [];
    let d = Math.pow(b, 2) - 4 * a * c;
    let x1, x2;
    if (d < 0){
        return arr;
    } else if (d === 0){
        x1 = -b / (2 * a);
        arr.push(x1);
        return arr;
    } else if (d > 0){
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        arr.push(x1);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x2);
        return arr;
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
    let totalPayment = monthlyPayment * countMonths;
    totalPayment = totalPayment.toFixed(2); 
    return parseFloat(totalPayment);
}
