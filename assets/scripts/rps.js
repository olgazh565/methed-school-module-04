'use strict';

(() => {
  const preGame = () => {
    const figuresArr = ['камень', 'ножницы', 'бумага'];

    const getRandomElem = (arr) => {
      const index = Math.round(Math.random() * (arr.length - 1));
      return index;
    };

    return function start() {
      const computerChoice = getRandomElem(figuresArr);
      const userChoice = prompt(`${figuresArr.join(', ')}?`, '');

      const checkUserChoice = (userChoice) => {
        if (userChoice === null) return null;

        userChoice = userChoice.trim().toLowerCase();

        for (const elem of figuresArr) {
          if (userChoice.length && elem.startsWith(userChoice)) {
            return figuresArr.indexOf(elem);
          }
        }
        return false;
      };

      const userChoiceChecked = checkUserChoice(userChoice);

      const showRoundResult = (message) => {
        alert(`
          Бот: ${figuresArr[computerChoice]}
          Ты: ${figuresArr[userChoiceChecked]}
          ${message}`);
      };

      switch (true) {
        case userChoiceChecked === null:
          return null;
        case userChoiceChecked === false:
          break;
        case computerChoice === userChoiceChecked:
          showRoundResult('Ничья!');
          break;
        case ((computerChoice + 1) % 3 === userChoiceChecked):
          showRoundResult('Бот выиграл, бот ходит первым!');
          return 'botTurn';
        default:
          showRoundResult('Ты выиграл, ты ходишь первым!');
          return 'userTurn';
      }
      return start();
    };
  };
  window.rockPaperSissors = preGame;
})();
