'use strict';

const userRangeMin = +prompt('Введи первое число', '');
const userRangeMax = +prompt('Введи второе число', '');
const botNumber = Math.ceil(Math.random() * (userRangeMax - userRangeMin + 1)) + userRangeMin;
const attempts = (userRangeMax - userRangeMin) * 0.3;

let numbersArray = [];
let userNumber;

while (attempts && (+userNumber !== botNumber) && (userNumber !== null)) {

    userNumber = prompt('Угадай число', '');

    switch (true) {
        case userNumber === null:
            alert('Игра окончена!');
            break;
        case Number.isNaN(userNumber):
            alert('Введи число!');
            break;
        case (userNumber === ''):
            alert('Введи число!');
            break;
        case (userNumber === ' '):
            alert('Введи число!');
            break;
        case numbersArray.includes(+userNumber):
            alert('Это число вы уже вводили!');
            break;
        case +userNumber > botNumber:
            alert('Меньше!');
            numbersArray.push(+userNumber);
            attempts--;
            break;    
        case +userNumber < botNumber:
            alert('Больше!');
            numbersArray.push(+userNumber);
            attempts--;
            break;
        default:
            alert('Правильно!');
            break;
    }

    if (!attempts) {
        alert ('Попыток больше нет!');
    }
}