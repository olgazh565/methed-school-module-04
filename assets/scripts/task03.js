'use strict';

const generateArray = (arrLength, n, m, str) => {

    let arr = [];

    while (arr.length < arrLength) {

        const elem = Math.floor(Math.random() * (n - m + 1)) + m;

        if (str === 'even') {
            if (elem % 2 === 0) {
                arr.push(elem);
            } 
        } else if (str === 'odd') {
            if (elem % 2 !== 0) {
                arr.push(elem);
            } 
        } else {
            arr.push(elem);
        }
    }

    return arr;
}

console.log(generateArray(10, -15, 15, 'even'));
