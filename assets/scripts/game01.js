'use strict';

const botNumber = Math.ceil(Math.random() * 100);
let userNumber;

while ((userNumber !== null) && (+userNumber !== botNumber)) {
    
    userNumber = prompt('Угадай число от 1 до 100', '');

    switch (true) {
        case userNumber === null:
            alert('Игра окончена!');
            break;
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
            break;
    }
}

