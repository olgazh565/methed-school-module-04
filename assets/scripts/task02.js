'use strict';

const generateArray = (arrLength, n, m) => {

    let arr = [];

    while (arr.length < arrLength) {

        const elem = (n > m) ? Math.ceil(Math.random() * (n - m)) + m : Math.ceil(Math.random() * (m - n)) + n;

        arr.push(elem);
    }

    return arr;
}

console.log(generateArray(10, -15, 20));


