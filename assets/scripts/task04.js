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

const getAveragePriceGoods = (arr) => {

    const amount = arr.reduce((sum, value) => sum = sum + value[0], 0);
    const value = arr.reduce((sum, value) => sum = sum + value[1], 0);

    return Math.round(value / amount);
}    

console.log('Средняя стоимость одного товара в магазине: ' + getAveragePriceGoods(allCashbox2) + ' рублей');

