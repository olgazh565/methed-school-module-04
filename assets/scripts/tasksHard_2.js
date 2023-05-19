'use strict';

// Задача 2

const income = +prompt('Укажите сумму вашего дохода?');
let taxSum = 0;
let sumLeft = income;

if (sumLeft >= 50000) {
    taxSum = (sumLeft - 50000) * 0.3;
    sumLeft = 50000;
}

if (sumLeft > 15000) {
    taxSum += (sumLeft - 15000) * 0.2;
    sumLeft = 15000;
} 

if (sumLeft > 0) {
    taxSum += sumLeft * 0.13;
    sumLeft = 0;
}

console.log('Сумма налога: ' + taxSum);


