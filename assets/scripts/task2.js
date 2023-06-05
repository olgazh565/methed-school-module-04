'use strict';

const array = [];

const generateArray = (arr) => {
    const elem = Math.round(Math.random() * 10);
    arr.push(elem);
    const arraySum = arr.reduce((sum, item) => sum + item, 0);

    return arraySum >= 50 ? arr : generateArray(arr);
};

console.log(generateArray(array));

