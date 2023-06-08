'use strict';

const array = [];

const generateArray = arr =>
    (arr.reduce((sum, item) => sum + item, 0) >= 50 ?
            arr : generateArray([...arr, Math.round(Math.random() * 10)]));

console.log(generateArray(array));

