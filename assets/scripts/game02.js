'use strict';

const userRangeMin = +prompt('Введи первое число', '');
const userRangeMax = +prompt('Введи второе число', '');
const botNumber = Math.round(Math.random() * (userRangeMax - userRangeMin + 1)) + userRangeMin;
const attempts = Math.round((userRangeMax - userRangeMin) * 0.3);

let numbersArray = [];
let userNumber;

while (attempts > numbersArray.length && (+userNumber !== botNumber) && (userNumber !== null)) {

    userNumber = prompt('Угадай число', '');
    
    switch (true) {
        case userNumber === null:
            alert('Игра окончена!');
            break;
        case Number.isNaN(userNumber):    
        case (!userNumber.trim()):
        case (+userNumber < userRangeMin):
        case (+userNumber > userRangeMax):
            alert(`Введи число on ${userRangeMin} до ${userRangeMax}!`);
            break;
        case numbersArray.includes(+userNumber):
            alert('Это число вы уже вводили!');
            break;
        case +userNumber > botNumber:
            alert('Меньше!');
            numbersArray.push(+userNumber);
            break;    
        case +userNumber < botNumber:
            alert('Больше!');
            numbersArray.push(+userNumber);
            break;
        default:
            alert('Правильно!');
            break;
    }

    if (attempts <= numbersArray.length) {
        alert ('Попыток больше нет!');
    }
}