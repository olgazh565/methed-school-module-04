'use strict';

const dollarExchangeRate = 73;
const euroExchangeRate = 1.2 * dollarExchangeRate;

const exchangeCurrency = (totalSumEuro) => {
    const totalSumRUB = totalSumEuro * euroExchangeRate;

    return totalSumRUB;
}

console.log('Стоимость покупки в рублях: ' +  exchangeCurrency(1000));



