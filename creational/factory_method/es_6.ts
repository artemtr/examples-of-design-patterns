const level = 2;

abstract class Animal {

    abstract doAction();

}


class Dog extends Animal {

    doAction() {
        console.log("Dog");
    }

}

class Cat extends Animal {

    doAction() {
        console.log("Cat");
    }

}

abstract class AnimalFactory {
    protected animal: Animal = this.getAnimal();

    abstract getAnimal();

    move() {
        this.animal.doAction();
    }


}

class DogFactory extends AnimalFactory {
    getAnimal() {
        return new Dog();
    }
}

class CatFactory extends AnimalFactory {
    getAnimal() {
        return new Cat();
    }
}

class App {
    animal: AnimalFactory;

    constructor(level) {
        if (level === 1) {
            this.animal = new DogFactory();
        } else {
            this.animal = new CatFactory();
        }
    }
}

const ob = new App(level);

ob.animal.move();
