'use strict';

// Задача 2

const income = +prompt('Укажите сумму вашего дохода?');
let taxSum;
let sumLeft;

if (income >= 50000) {
    taxSum = (income - 50000) * 0.3;
    sumLeft = 50000;
}

if (sumLeft) {
    taxSum += (sumLeft - 15000) * 0.2;
    sumLeft = 15000;
} else if (income > 15000 && income < 50000) {
    taxSum = (income - 15000) * 0.2;
    sumLeft = 15000;
} 

if (sumLeft) {
    taxSum += sumLeft * 0.13;
    sumLeft = 0;
} else if (income > 0 && income < 15000) {
    taxSum = income * 0.13;
    sumLeft = 0;
} else {
    alert('Сумма дохода для расчета должна быть больше 0!')
}

console.log('Сумма налога: ' + taxSum);


