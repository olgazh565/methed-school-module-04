'use strict';

const rectangle = {
    set rectangleWidth(value) {
        this.width = typeof value === 'number' ? value : 5;
    },
    set rectangleHeight(value) {
        this.height = typeof value === 'number' ? value : 5;
    },
    get rectanglePerimeter() {
        return (this.width + this.height) * 2 + ' см';
    },
    get rectangleSquare() {
        return this.width * this.height + ' см';
    },
};

rectangle.rectangleWidth = 150;
rectangle.rectangleHeight = 75;

console.log('Периметр прямоугольника: ', rectangle.rectanglePerimeter);
console.log('Площать прямоугольника: ', rectangle.rectangleSquare);
