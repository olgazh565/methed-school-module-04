'use strict';

const generateArray = (arrLength) => {

    let arr = [];

    while (arr.length < arrLength) {
        arr.push(Math.ceil(Math.random() * 100));
    }

    return arr;
}

console.log(generateArray(10));