'use strict';

const Cart = function() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;

    this.addGoods = function(product) {
        this.goods.push(product);
        this.increaseCount();
    };

    this.calculateGoodsPrice = function() {
        this.totalPrice = (this.goods.reduce((acc, item) =>
            acc + item.price * ((100 - item.discount) / 100), 0));
        return this.totalPrice;
    };

    this.getTotalPrice = function() {
        return this.calculateGoodsPrice();
    };

    this.increaseCount = function() {
        return this.count += 1;
    };

    this.clear = function() {
        this.goods = [];
        this.totalPrice = 0;
        this.count = 0;
    };

    this.print = function() {
        console.log(JSON.stringify(this.goods));
        console.log(`Общая стоимость корзины: ${Math.round(this.getTotalPrice())} рублей`);
    };
};

const Goods = function(price, title, discount) {
    this.price = price;
    this.title = title;
    this.discount = discount;
};

const FoodGoods = function(price, title, discount, calories) {
    Goods.call(this, price, title, discount);
    this.calories = calories;
};

const ClothingGoods = function(price, title, discount, material) {
    Goods.call(this, price, title, discount);
    this.material = material;
};

const TechnicsGoods = function(price, title, discount, technicsType) {
    Goods.call(this, price, title, discount);
    this.technicsType = technicsType;
};

const food = new FoodGoods(500, 'apple', 10, '30kkal');
console.log('food: ', food);
const clothes = new ClothingGoods(300, 'dress', 5, 'silk');
console.log('clothes: ', clothes);
const technics = new TechnicsGoods(5000, 'radio', 15, 'electronic');
console.log('technics: ', technics);

const cart = new Cart();

cart.addGoods(food);
cart.addGoods(clothes);
cart.addGoods(technics);

console.log('cart: ', cart);

cart.print();


