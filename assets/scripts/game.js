'use strict';

(() => {
    const FIGURES_ENG = ['rock', 'sissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const langArray = {
        ru: {
            total: 'Общий счет',
            you: 'Вы',
            computer: 'Компьютер',
            confirm: 'Вы точно хотите выйти из игры?',
            tie: 'Ничья!',
            computerWon: 'Компьютер выиграл :(',
            youWon: 'Вы выиграли!',
        },
        en: {
            total: 'Total score',
            you: 'You',
            computer: 'Computer',
            confirm: 'Are you sure you want to quit?',
            tie: 'It is a tie!',
            computerWon: 'Computer won :(',
            youWon: 'You won!',
        },
    };

    const getRandomElem = (arr) => {
        const index = Math.round(Math.random() * (arr.length - 1));
        return index;
    };

    const game = (language) => {
        const figuresLang = language === 'EN' || language === 'ENG' ?
            FIGURES_ENG : FIGURES_RUS;

        const textLang = language === 'EN' || language === 'ENG' ?
            langArray.en : langArray.ru;

        const result = {
            user: 0,
            computer: 0,
            get total() {
                return alert(`
                    ${textLang.total}:
                    ${textLang.you}: ${this.user}
                    ${textLang.computer}: ${this.computer}`);
            },
        };

        return function start() {
            const computerChoice = getRandomElem(figuresLang);
            const userChoice = prompt(`${figuresLang.join(', ')}?`, '');

            const checkUserChoice = () => {
                for (const elem of figuresLang) {
                    if (elem.startsWith(userChoice?.trim().toLowerCase()) &&
                            userChoice.length > 0) {
                        return figuresLang.indexOf(elem);
                    }
                } return false;
            };

            const userChoiceChecked = checkUserChoice();

            const showRoundResult = (message) => {
                alert(`
                    ${textLang.computer}: ${figuresLang[computerChoice]}
                    ${textLang.you}: ${figuresLang[userChoiceChecked]}
                    ${message}`);
            };

            switch (true) {
                case userChoice === null:
                    if (confirm(textLang.confirm)) {
                        return result.total;
                    } break;
                case userChoiceChecked === false:
                    break;
                case computerChoice === userChoiceChecked:
                    showRoundResult(textLang.tie);
                    break;
                case ((computerChoice + 1) % 3 === userChoiceChecked):
                    showRoundResult(textLang.computerWon);
                    result.computer += 1;
                    break;
                default:
                    showRoundResult(textLang.youWon);
                    result.user += 1;
                    break;
            }
            return start();
        };
    };

    window.rockPaperSissors = game;
})();
