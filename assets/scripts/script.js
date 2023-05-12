'use strict';

const productName = prompt('Введите наименование товара', "");
const productAmount = +prompt('Введите количество товара', "");
const productCategory = prompt('Введите категорию товара', "");
const productPrice = +prompt('Введите цену товара', "");
const productTotal = productAmount * productPrice;


console.log('тип данных productName: ' + typeof productName);
console.log('тип данных productAmount: ' + typeof productAmount);
console.log('тип данных productCategory: ' + typeof productCategory);
console.log('тип данных productPrice: ' + typeof productPrice);
console.log(`На складе ${productAmount} единицы товара "${productName}" на сумму ${productTotal} деревянных`);
