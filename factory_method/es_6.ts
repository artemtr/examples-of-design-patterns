abstract class Animal {
    protected name;
    protected tail;
    protected weight;

    constructor(data: { name: string; tail: number; weight: number }) {
        this.name = data.name;
        this.tail = data.tail;
        this.weight = data.weight;
    }
}

const catConfig = {
    name: "Alisa",
    tail: 1.65,
    weight: 65
}

const dogConfig = {
    name: "Rex",
    tail: 1.00,
    weight: 165
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

class AnimalFactory {
    constructor(type, data) {
        if (type === "dog")
            return new Dog(data);
        if (type === "cat")
            return new Cat(data);

    }
}

const Idog = new AnimalFactory("dog", dogConfig);

console.log(Idog);