abstract class Main {

    add() {
        this.display();
        this.hook();
        this.display2();
    }

    display() {
        console.log("display 1");
    }

    display2() {
        console.log("display 2");
    }

    abstract hook(): void;

}

class Artem extends Main {
    hook() {
        console.log("hook");
    }
}

