'use strict';


(() => {
    const FIGURES_ENG = ['rock', 'paper', 'sissors'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {

    };

    const getFigure = lang => {

    };

    const game = (language) => {
        const result = {
            player: 0,
            computer: 0,
        };

        const lang = language === 'EN' || language === 'ENG' ?
            FIGURES_ENG : FIGURES_RUS;

        return function start() {
            
        }
    };

    window.RPS = game;
})();
