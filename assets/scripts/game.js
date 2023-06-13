'use strict';

(() => {
  const game = () => {
    const startRPS = window.rockPaperSissors();
    let isUserTurn = startRPS();

    const balls = {
      user: 5,
      bot: 5,
      reset() {
        this.user = 5;
        this.bot = 5;
      },
      get total() {
        return `
          Общий счет:
          Ты: ${this.user}
          Бот: ${this.bot}`;
      },
    };

    if (isUserTurn) {
      return function start() {
        const botNumber = balls.bot > balls.user ?
          Math.ceil(Math.random() * balls.user) :
          Math.ceil(Math.random() * balls.bot);

        const botChoice = botNumber % 2 ? 'НЕЧЕТНОЕ' : 'ЧЕТНОЕ';

        const textUser = isUserTurn === 'userTurn' ?
          'Ты загадал' : 'Твоя догадка';
        const textBot = isUserTurn === 'userTurn' ?
          'Догадка бота' : 'Бот загадал';

        const changeUserMove = () => {
          if (isUserTurn === 'userTurn') {
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
          } else if (isUserTurn === 'botTurn') {
            const userGuess = confirm(
                'Какое число загадал бот? ОК-четное, ОТМЕНА-нечетное') ?
                'ЧЕТНОЕ' : 'НЕЧЕТНОЕ';

            return [userGuess];
          }
        };

        const [userChoice, userNumber = ''] = changeUserMove();

        const scoreCount = isUserTurn === 'userTurn' ? +userNumber : +botNumber;

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
            if (isUserTurn === 'userTurn') {
              showRoundResult('Бот выиграл :(', countResult);
              break;
            } else {
              showRoundResult('Ты выиграл! :)', countResult);
              break;
            }
          default: /** userChoice !== botChoice **/
            if (isUserTurn === 'userTurn') {
              showRoundResult('Ты выиграл! :)', countResult);
              break;
            } else {
              showRoundResult('Бот выиграл :(', countResult);
              break;
            }
        }

        if (isUserTurn === 'userTurn') {
          isUserTurn = 'botTurn';
        } else {
          isUserTurn = 'userTurn';
        }

        if (balls.user === 0 || balls.bot === 0) {
          const endGame = confirm(`
          Игра окончена!
          ${balls.total}
          Хочешь сыграть еще?
          `);
          if (endGame) {
            balls.reset();
            isUserTurn = startRPS();
            return start();
          } return null;
        }

        return start();
      };
    }
  };
  window.marbles = game;
})();
