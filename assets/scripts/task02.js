'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let sum = 0; 

    for (let key of arr) {
        sum += key;
    }
    return Math.floor(sum / arr.length);
}

console.log(getAverageValue(allCashbox));


