'use strict';

const reverseString = (string) => {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string.trim()[i];
    } return newString;
}

console.log(reverseString('Привет мир'));