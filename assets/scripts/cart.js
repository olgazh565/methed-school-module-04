'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,

  add(name, price, amount = 1) {
    const item = {
      name,
      price,
      amount,
    };

    this.items.push(item);
    this.increaseCount(amount);
  },

  increaseCount(amount) {
    this.count += amount;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc + item.price * item.amount, 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('bread', 100, 2);
cart.add('milk', 80, 3);
cart.add('apples', 150, 10);
cart.add('meat', 500, 1);

cart.print();
