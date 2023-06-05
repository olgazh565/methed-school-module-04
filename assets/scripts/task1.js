'use strict';

const botNumber = Math.ceil(Math.random() * 100);

const guessNumber = (num) => {
    const userNumber = prompt('Угадай число от 1 до 100', '');

    switch (true) {
        case userNumber === null:
            alert('Игра окончена!');
            break;
        case +userNumber === botNumber:
            alert('Правильно!');
            break;
        case Number.isNaN(+userNumber):
        case (!userNumber.trim()):
        case (+userNumber < 0):
        case (+userNumber > 100):
            alert('Введи число от 1 до 100!');
            guessNumber(num);
            break;
        case +userNumber > botNumber:
            alert('Меньше!');
            guessNumber(num);
            break;
        case +userNumber < botNumber:
            alert('Больше!');
            guessNumber(num);
            break;
    }
};

guessNumber(botNumber);
