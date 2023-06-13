'use strict';

(() => {
  const game = () => {
    let isUserTurn = true;

    const balls = {
      bot: 5,
      user: 5,
      get total() {
        return `
          Общий счет:
          Ты: ${this.user}
          Бот: ${this.bot}`;
      },
    };

    return function start() {
      const botNumber = balls.bot > balls.user ?
          Math.ceil(Math.random() * balls.user) :
          Math.ceil(Math.random() * balls.bot);

      const botChoice = botNumber % 2 ? 'НЕЧЕТНОЕ' : 'ЧЕТНОЕ';

      const textUser = isUserTurn ? 'Ты загадал' : 'Твоя догадка';
      const textBot = isUserTurn ? 'Догадка бота' : 'Бот загадал';

      const changeUserMove = () => {
        if (isUserTurn) {
          const userNumber = balls.user > balls.bot ?
              prompt(`Твой ход! Загадай число от 1 до ${balls.bot}`, '') :
              prompt(`Твой ход! Загадай число от 1 до ${balls.user}`, '');

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

          return [userChoice, userNumber];
        } else {
          const userGuess = confirm(
              'Какое число загадал бот? ОК - четное, ОТМЕНА - нечетное') ?
              'ЧЕТНОЕ' : 'НЕЧЕТНОЕ';

          return [userGuess, ''];
        }
      };

      const [userChoice, userNumber] = changeUserMove();
      const scoreCount = isUserTurn ? +userNumber : +botNumber;

      const countResult = message => {
          message === 'Бот выиграл :(' ?
          (balls.user -= scoreCount, balls.bot += scoreCount) :
          (balls.user += scoreCount, balls.bot -= scoreCount);
      };

      const showRoundResult = (message, callback) => {
        callback(message);
        alert(`
          ${textUser}: ${userChoice} число
          ${textBot}: ${botChoice} число "${botNumber}"
          ${message}
          ${balls.total}
          `);
      };

      switch (true) {
        case userChoice === null:
          return null;
        case userChoice === false:
          break;
        case (userChoice === botChoice):
          if (isUserTurn) {
            showRoundResult('Бот выиграл :(', countResult);
            break;
          } else {
            showRoundResult('Ты выиграл! :)', countResult);
            break;
          }
        default:
          if (isUserTurn) {
            showRoundResult('Ты выиграл! :)', countResult);
            break;
          } else {
            showRoundResult('Бот выиграл :(', countResult);
            break;
          }
      }

      if (balls.user === 0 || balls.bot === 0) {
        return alert(`
          Игра окончена!
          ${balls.total}
          `);
      }

      isUserTurn = !isUserTurn;

      return start();
    };
  };
  window.marbles = game;
})();
