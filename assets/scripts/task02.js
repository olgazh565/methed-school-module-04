'use strict';

const modifyString = (string) => {
    return string.trim().substring(0, 1).toUpperCase() + string.trim().substring(1).toLowerCase();
}

console.log(modifyString('привет Мир'));