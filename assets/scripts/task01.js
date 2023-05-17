'use strict';

const exchangeCurrency = (totalSumEuro) => {
    const dollarExchangeRate = 73;
    const euroExchangeRate = 1.2 * dollarExchangeRate;

    return totalSumEuro * euroExchangeRate;
}

console.log('Стоимость покупки в рублях: ' +  exchangeCurrency(1000));



