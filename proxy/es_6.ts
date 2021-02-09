interface Car {
    drive(): string;
}

class Volvo implements Car {
    drive() {
        return "Go";
    }
}

class ProxyCar implements Car {
    private car;
    private data = null;

    constructor(car: Car) {
        this.car = car;
    }

    drive() {
        if (!this.data) {
            this.data = this.car.drive();
        } else {
            this.data = "Already have a data";
        }
        return this.data;

    }
}

const ob = new ProxyCar(new Volvo());

console.log(ob.drive());
console.log(ob.drive());