interface Ob1 {
    send();
}

class Form implements Ob1 {
    send() {
        console.log("Send");
    }
}

interface Ob2 {
    sendto();
}

class Form2 implements Ob2 {
    sendto() {
        console.log("Send");
    }
}

class obAdapter {
    ob: Form2;

    constructor(ob) {
        this.ob = ob;
    }

    send() {
        this.ob.sendto();
    }
}

const ob = new obAdapter(new Form2());

ob.send();

