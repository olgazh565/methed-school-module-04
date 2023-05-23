'use strict';

const generateArray = (arrLength, n, m) => {

    let arr = [];

    while (arr.length < arrLength) {

        const year = (n > m) ? Math.ceil(Math.random() * (n - m)) + m : Math.ceil(Math.random() * (m - n)) + n;

        const date = new Date(year, 1, 29).getDate();

        if (date === 29) {
            arr.push(year); 
        } else continue;
    }

    return arr;
}

console.log(generateArray(10, 1930, 2023));

