'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
    const newNames = [];

    for (let key of arr) {
        newNames.push(`${prefix} ${key}`);
    }

    return newNames;
}

console.log(addPrefix(names, 'Mr'));