'use strict';

const allCashbox2 = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

const countArraySum = (array) => {
    let sum = 0; 

    for (let i of array) {
        sum += i;
    }
    return sum;
};

const getAveragePriceGoods = (arr) => {

    const amountArr = [];
    const valueArr = [];

    for (let elem of arr) {
        for (let key of elem) {

            if (elem.indexOf(key) === 0) {
                amountArr.push(key);
            } else {
                valueArr.push(key);
            }
        }
    }

    const amountTotal = countArraySum(amountArr);
    const valueTotal = countArraySum(valueArr);

    return Math.round(valueTotal / amountTotal);
};

console.log('Средняя стоимость одного товара в магазине: ' + getAveragePriceGoods(allCashbox2) + ' рублей');

