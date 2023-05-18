'use strict';

// Задача 2

const income2 = +prompt('Укажите сумму вашего дохода?');
let taxSum2;
let sumLeft;

if (income2 >= 50000) {
    taxSum2 = (income2 - 50000) * 0.3;
    sumLeft = 50000;
}

if (sumLeft) {
    taxSum2 += (sumLeft - 15000) * 0.2;
    sumLeft = 15000;
} else if (income2 > 15000 && income2 < 50000) {
    taxSum2 = (income2 - 15000) * 0.2;
    sumLeft = 15000;
} 

if (sumLeft) {
    taxSum2 += sumLeft * 0.13;
    sumLeft = 0;
} else if (income2 > 0 && income2 < 15000) {
    taxSum2 = income2 * 0.13;
    sumLeft = 0;
} else {
    alert('Сумма дохода для расчета должна быть больше 0!')
}

console.log('Сумма налога: ' + taxSum2);


