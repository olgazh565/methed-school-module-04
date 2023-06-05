'use strict';

const cart = {
    items: [],
    count: 0,

    get totalPrice() {
        return this.calculateItemPrice();
    },

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
        if (this.discount) {
            return (this.items.reduce((acc, item) =>
                acc + item.price * item.amount, 0)) *
                ((100 - this.discount) / 100);
        } return this.items.reduce((acc, item) =>
            acc + item.price * item.amount, 0);
    },

    clear() {
        this.items = [];
        this.count = 0;
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Общая стоимость корзины: ${Math.round(this.totalPrice)}`);
    },

    set setDiscount(value) {
        if (value === 'METHED') {
            this.discount = 15;
        } else if (value === 'NEWYEAR') {
            this.discount = 21;
        }
    },
};

cart.add('bread', 100, 2);
cart.add('milk', 80, 3);
cart.add('apples', 150, 10);
cart.add('meat', 500, 1);

// cart.setDiscount = 'METHED';
cart.setDiscount = 'NEWYEAR';

cart.print();
