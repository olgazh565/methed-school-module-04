'use strict';

const modifyString = (string) => {
    const newString = string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
    
    return newString;
}

console.log(modifyString('привет Мир'));