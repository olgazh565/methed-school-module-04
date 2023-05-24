'use strict';

const generateArray = (arrLength, n, m, str) => {

    let arr = [];
    const rules = ['even', 'odd'].indexOf(str);
    console.log('rules: ', rules);

    n < m && ([n, m] = [m, n]);

    while (arr.length < arrLength) {

        const elem = Math.floor(Math.random() * (n - m + 1)) + m;

        if (rules === -1 || Math.abs(elem % 2) === rules) arr.push(elem);
    }
    return arr;
}

console.log(generateArray(100, -15, 15));
