'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    
    return Math.floor(arr.reduce((sum, value) => sum + value) / arr.length);
}

console.log(getAverageValue(allCashbox));


