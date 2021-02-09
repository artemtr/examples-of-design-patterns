abstract class Animal {
    protected name;
    protected tail;
    protected weight;

}

const level = 1;


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

class AnimalFactory {
    constructor() {
        if (level === 1) return new Dog();
        else return new Cat();

    }
}

const Idog = new AnimalFactory();

console.log(Idog);