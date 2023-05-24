'use strict';

const generateArray = (arrLength, n, m) => {

    let arr = [];

    while (arr.length < arrLength) {
        
        const elem = Math.floor(Math.random() * (n - m + 1)) + m;

        arr.push(elem);
    }

    return arr;
}

console.log(generateArray(100, 15, -15));


