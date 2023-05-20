'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
    const newNames = [...arr];

    return newNames.map(item => `${prefix} ${item}`);
}

console.log(addPrefix(names, 'Mr'));

