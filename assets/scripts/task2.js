'use strict';

const array = [];

const generateArray = (arr) => {
    if (arr.reduce((sum, item) => sum + item, 0) >= 50) {
        return arr;
    } else {
        const elem = Math.round(Math.random() * 10);
        arr.push(elem);
        return generateArray(arr);
    }
};

console.log(generateArray(array));

