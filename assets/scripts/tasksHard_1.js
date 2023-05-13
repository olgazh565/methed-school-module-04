'use strict';

// Задача 1

// const income = +prompt('Cумма вашего дохода?');
// let taxSum;

// switch (true) {
//     case (income < 15000):
//         taxSum = income * 0.13
//         break;
//     case (15000 <= income && income < 50000):
//         taxSum = income * 0.2
//         break;
//     case (income >= 50000):
//         taxSum = income * 0.3
//         break;
//     default:
//         break;
// }

// console.log('Сумма налога: ' +  Math.round(taxSum));

// Задача 2

// const income2 = +prompt('Укажите сумму вашего дохода?');
// let taxSum2;
// const sumLimitFirst = 14999;
// const sumLimitSecond = 50000;

// switch (true) {
//     case (income2 < 15000):
//         taxSum2 = income2 * 0.13
//         break;
//     case (15000 <= income2 && income2 < 50000):
//         taxSum2 = (income2 - sumLimitFirst) * 0.2 + sumLimitFirst * 0.13 
//         break;
//     case (income2 >= 50000):
//         taxSum2 = (income2 - sumLimitSecond) * 0.3 + (sumLimitSecond - sumLimitFirst) * 0.2 + sumLimitFirst * 0.13
//         break;
//     default:
//         break;
// }

// console.log('Сумма налога: ' + Math.round(taxSum2));