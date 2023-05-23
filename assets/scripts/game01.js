'use strict';

const number = Math.ceil(Math.random() * 100);

while (true) {
    const userNumber = prompt('Угадай число от 1 до 100', '');

    if (userNumber === null) {
        alert('Игра окончена!');
        break;
    } else { 
        if (Number.isNaN(+userNumber) || userNumber === '' || userNumber === ' ') {
            alert('Введи число!');
        } else if (+userNumber > number) {
            alert('Меньше!');
        } else if (+userNumber < number) {
            alert('Больше!');
        } else if (+userNumber === number) {
            alert('Правильно!');
            break;
        }
    }
}

