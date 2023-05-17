'use strict';

const calculate = (basketTotalSum, basketGoodsNumber, promocode) => {

    let discount;

    if (basketGoodsNumber > 10) {
        discount = basketTotalSum * 0.03;
    }

    if (basketTotalSum >= 30000) {
        discount += (basketTotalSum - 30000) * 0.15;
    }

    if (promocode === 'METHED') {
        discount += basketTotalSum * 0.1;
    }

    if (promocode === 'G3H2Z1' && (basketTotalSum - discount) > 2000) {
        discount += 500;
    }

    return basketTotalSum - discount;
}

console.log(calculate(40000, 11, 'METHED'));