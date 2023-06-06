'use strict';

const rectangle = {
    _width: 5,
    _height: 5,
    set width(value) {
        this._width = value;
    },
    set height(value) {
        this._height = value;
    },
    get perimeter() {
        return (this._width + this._height) * 2 + ' см';
    },
    get square() {
        return this._width * this._height + ' см';
    },
};

rectangle.width = 50;
rectangle.height = 25;

console.log('Периметр прямоугольника: ', rectangle.perimeter);
console.log('Площать прямоугольника: ', rectangle.square);
