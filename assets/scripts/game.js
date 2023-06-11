'use strict';

(() => {
    const game = () => {
        const balls = {
            user: 5,
            bot: 5,
            get total() {
                return `
                Общий счет:
                Ты: ${this.user}
                Бот: ${this.bot}`;
            },
        };

        return function start() {
            const randomEvenOdd = () => (Math.round(Math.random() * 100) % 2 ?
            'НЕЧЕТНОЕ' : 'ЧЕТНОЕ');

            const botGuess = randomEvenOdd();
            console.log('botGuess: ', botGuess);

            const userNumber = balls.user > balls.bot ?
                prompt(`Загадай число от 1 до ${balls.bot}`, '') :
                prompt(`Загадай число от 1 до ${balls.user}`, '');

            const transformUserNumber = userNumber => {
                if (userNumber === null) {
                    return null;
                } else if (isNaN(+userNumber) || !userNumber.length ||
                    +userNumber < 1 || +userNumber > balls.user ||
                    (balls.user > balls.bot && +userNumber > balls.bot)) {
                    return false;
                }

                return userNumber % 2 ? 'НЕЧЕТНОЕ' : 'ЧЕТНОЕ';
            };

            const userChoice = transformUserNumber(userNumber);
            console.log('userChoice: ', userChoice);

            const countResult = message => {
                message === 'Бот выиграл :(' ?
                    (balls.user -= +userNumber,
                    balls.bot += +userNumber) :
                    (balls.user += +userNumber,
                    balls.bot -= +userNumber);
            };

            const showRoundResult = (message, callback) => {
                callback(message);
                alert(`
                Ты загадал: ${userChoice} число
                Догадка бота: ${botGuess} число
                ${message}
                ${balls.total}
                `);
            };

            switch (true) {
                case userChoice === null:
                    return null;
                case userChoice === false:
                    break;
                case userChoice === botGuess:
                    showRoundResult('Бот выиграл :(', countResult);
                    break;
                default:
                    showRoundResult('Ты выиграл! :)', countResult);
                    break;
            }

            if (balls.user === 0 || balls.bot === 0) {
                return alert(`
                Игра окончена!
                ${balls.total}
                `);
            }
            return start();
        };
    };
    window.marbles = game;
})();
