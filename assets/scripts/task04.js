'use strict';

const generateArray = (n, m) => {

    let arr = [];

    for (let i = n; i <= m; i++) {
        if (((i % 4 === 0) && (i % 100 !== 0)) || (i % 400 === 0)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(generateArray(1930, 2023));

