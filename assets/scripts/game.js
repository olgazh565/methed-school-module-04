'use strict';

(() => {
    const FIGURES_ENG = ['rock', 'sissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomElem = (arr) => {
        //получаем случайное число от 0 до 2, кот.используется как индекс элемента массива для хода компьютера
        const index = Math.round(Math.random() * (arr.length - 1));
        // console.log('x: ', index);

        return index;
    };

    // const getFigure = lang => {

    // };

    const game = (language) => {
        const result = {
            user: 0,
            computer: 0,
            get total() {
                return alert(`
                    Общий счет:
                    Вы: ${this.user}
                    Компьютер: ${this.computer}`);
            },
        };

        const lang = language === 'EN' || language === 'ENG' ?
            FIGURES_ENG : FIGURES_RUS;

        return function start() {
            const computerChoice = getRandomElem(lang);
            const userChoice = prompt(`${lang.join(', ')}?`);

            const userChoiceCheck = () => {
                for (const elem of lang) {
                    if (elem.startsWith(userChoice?.toLowerCase())) {
                        return lang.indexOf(elem);
                    }
                } return false;
            };
            console.log(userChoiceCheck());

            const showRoundResult = (message) => {
                alert(`
                    Компьютер: ${lang[computerChoice]}
                    Вы: ${lang[userChoiceCheck()]}
                    ${message}`);
            };

            switch (true) {
                case userChoice === null:
                    if (confirm('Вы точно хотите выйти из игры?')) {
                        return result.total;
                    } break;
                case userChoiceCheck() === false:
                    break;
                case computerChoice === userChoiceCheck():
                    showRoundResult('Ничья :)');
                    break;
                case (computerChoice === 0 && userChoiceCheck() === 1):
                case (computerChoice === 1 && userChoiceCheck() === 2):
                case (computerChoice === 2 && userChoiceCheck() === 0):
                    showRoundResult('Компьютер выиграл :(');
                    result.computer += 1;
                    break;
                default:
                    showRoundResult('Вы выиграли!');
                    result.user += 1;
                    break;
            }
            return start();
        };
    };

    window.rockPaperSissors = game;
})();
