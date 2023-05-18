'use strict';

const reverseString = (string) => {
    string = string.trim();
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    } return newString;
};

console.log(reverseString('Привет мир'));