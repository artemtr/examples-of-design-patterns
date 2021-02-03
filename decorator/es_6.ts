abstract class Drink {

    abstract cost(): number;
}

class Coffee extends Drink {

    cost() {
        return 100;
    }

}

class CoffeeDecorate {
    decorated;

    constructor(decorated: Coffee) {
        this.decorated = decorated;
    }
}


class Milk extends CoffeeDecorate {

    cost() {
        return this.decorated.cost() + 20;
    }

}

class Chocolate extends CoffeeDecorate {

    cost() {
        return this.decorated.cost() + 20;
    }

}

let CoffeeWithMik = new Milk(new Coffee);
CoffeeWithMik = new Chocolate(CoffeeWithMik);


console.log(CoffeeWithMik.cost());






