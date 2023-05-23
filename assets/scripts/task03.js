'use strict';

const generateArray = (arrLength, n, m, str) => {

    let arr = [];

    while (arr.length < arrLength) {

        const elem = (n > m) ? Math.ceil(Math.random() * (n - m)) + m : Math.ceil(Math.random() * (m - n)) + n;
        
        if (str === 'even') {
            if (elem % 2 === 0) {
                arr.push(elem);
            } else continue;
        } else if (str === 'odd') {
            if (elem % 2 !== 0) {
                arr.push(elem);
            } else continue;
        } else {
            arr.push(elem);
        }
    }

    return arr;
}

console.log(generateArray(10, -15, 15, 'odd'));
