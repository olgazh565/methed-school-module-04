'use strict';

const userRangeMin = +prompt('Введи первое число', '');
const userRangeMax = +prompt('Введи второе число', '');
const botNumber = Math.ceil(Math.random() * (userRangeMax - userRangeMin)) + userRangeMin;
const range = userRangeMax - userRangeMin;

let attempts;
let numbersArray = [];

if (range >= 50 && range <= 100) {
    attempts = 15;
    } else {
        attempts = Math.round(range * 0.3);
    }

while (attempts) {

    const userNumber = prompt('Угадай число', '');
    
    if (userNumber === null) {
        alert('Игра окончена!');
        break;
    } else {
        if (Number.isNaN(+userNumber) || userNumber === '' || userNumber === ' ') {
            alert('Введи число!');
        } else if (numbersArray.includes(+userNumber)) { 
            alert('Это число вы уже вводили!');
        } else if (+userNumber > botNumber) {
            alert('Меньше!');
            numbersArray.push(+userNumber);
            attempts--;
        } else if (+userNumber < botNumber) {
            alert('Больше!');
            numbersArray.push(+userNumber);
            attempts--;
        } else if (+userNumber === botNumber) {
            alert('Правильно!');
            break;
        } 
    }
}