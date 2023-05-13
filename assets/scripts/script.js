'use strict';

// Задача 1

const productName = prompt('Введите наименование товара', "");
const productAmount = +prompt('Введите количество товара', "");
const productCategory = prompt('Введите категорию товара', "");
const productPrice = +prompt('Введите цену товара', "");
const productTotal = productAmount * productPrice;

if (Number.isNaN(productAmount) || Number.isNaN(productPrice)) {
    alert('Вы ввели некорректные данные')
} 

