class Product {
    price: number;
    actions: any[];

    constructor() {
        this.price = 0;
        this.actions = [];
    }

    setBasePrice(val) {
        this.price = val;
        this.notifyAll();
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer));
    }

    notifyAll() {
        return this.actions.forEach(el => el.update(this.price));
    }
}

interface Children {
    update(price);
}

class Fees implements Children {
    update(price) {
        console.log(price * 4);
    }
}

class Profit implements Children {
    update(price) {
        console.log(price * 2);
    }
}

const ProductOb = new Product();

ProductOb.register(new Fees());
ProductOb.register(new Profit());
ProductOb.setBasePrice(100);

ProductOb.unregister(Profit);

ProductOb.setBasePrice(100);
