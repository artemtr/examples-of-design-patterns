abstract class Drink {

    abstract cost(): number;
}

abstract class DrinkDecorate {
    decorated;

    constructor(decorated: Drink) {
        this.decorated = decorated;
    }

    abstract cost(): number;
}

class Coffee extends Drink {

    cost() {
        return 100;
    }

}


class Milk extends DrinkDecorate {

    cost() {
        return this.decorated.cost() + 20;
    }

}

class Chocolate extends DrinkDecorate {

    cost() {
        return this.decorated.cost() + 20;
    }

}

let CoffeeWithMik = new Milk(new Coffee);
CoffeeWithMik = new Chocolate(CoffeeWithMik);


console.log(CoffeeWithMik.cost());






