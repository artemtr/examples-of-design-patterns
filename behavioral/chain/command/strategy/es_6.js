class ShoppingCart {

    constructor(strategy) {
        this.amout = 0;
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    setAmount(amount) {
        this.amout = amount;
    }

    checkout() {
        return this.strategy(this.amout);
    }

}

const guestStrategy = (amount) => {
    return amount;
}

const loginStrategy = (amount) => {
    return amount - ((amount / 100) * 10);
}


const Coupon = {
    "sale": 50
}
const couponStrategy = (amount) => {
    return amount - ((amount / 100) * Coupon.sale);
}

// Hey magazine. I am a visitor

const Cart = new ShoppingCart(guestStrategy);

//// I picked something

Cart.setAmount(1000);

/// I wanna buy it

/// Stop. I wanna by as login

Cart.setStrategy(couponStrategy);

console.log(Cart.checkout());




