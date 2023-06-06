'use strict';

const botNumber = Math.ceil(Math.random() * 100);

const guessNumber = (num) => {
    const userNumber = prompt('Угадай число от 1 до 100', '');

    switch (true) {
        case userNumber === null:
            alert('Игра окончена!');
            return null;
        case Number.isNaN(+userNumber):
        case (!userNumber.trim()):
        case (+userNumber < 0):
        case (+userNumber > 100):
            alert('Введи число от 1 до 100!');
            break;
        case +userNumber > botNumber:
            alert('Меньше!');
            break;
        case +userNumber < botNumber:
            alert('Больше!');
            break;
        default:
            alert('Правильно!');
            return num;
    }
    return guessNumber(num);
};

guessNumber(botNumber);
