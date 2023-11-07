'use strict';

class Cart {
    constructor(goods = [], totalPrice = 0, count = 0) {
        this.goods = goods;
        this.totalPrice = totalPrice;
        this.count = count;
    }

    addGoods(product) {
        this.goods.push(product);
        this.increaseCount();
    }

    calculateGoodsPrice() {
        this.totalPrice = (this.goods.reduce((acc, item) =>
            acc + item.price * ((100 - item.discount) / 100), 0));
        return this.totalPrice;
    }

    getTotalPrice() {
        return this.calculateGoodsPrice();
    }

    increaseCount() {
        return this.count += 1;
    }

    clear() {
        this.goods = [];
        this.totalPrice = 0;
        this.count = 0;
    }

    print() {
        console.log(JSON.stringify(this.goods));
        console.log(`Общая стоимость корзины: ${Math.round(this.getTotalPrice())} рублей`);
    }
}

class Goods {
    constructor(price, title, discount) {
        this.price = price;
        this.title = title;
        this.discount = discount;
    }
}

class FoodGoods extends Goods {
    constructor(price, title, discount, calories) {
        super(price, title, discount);
        this.calories = calories;
    }
}

class ClothingGoods extends Goods {
    constructor(price, title, discount, material) {
        super(price, title, discount);
        this.material = material;
    }
}

class TechnicsGoods extends Goods {
    constructor(price, title, discount, technicsType) {
        super(price, title, discount);
        this.technicsType = technicsType;
    }
}

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


