'use strict';

// Задача 1

const income = +prompt('Cумма вашего дохода?');
let taxSum;

switch (true) {
    case (income < 15000):
        taxSum = income * 0.13
        break;
    case (15000 <= income && income < 50000):
        taxSum = income * 0.2
        break;
    case (income >= 50000):
        taxSum = income * 0.3
        break;
    default:
        break;
}

console.log('Сумма налога: ' +  Math.round(taxSum));

