class User {
    default;
    name;
    phone;

    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

class ConstructUser {
    name;
    phone;

    setName(name) {
        this.name = name;
        return this;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    build() {
        return new User(this.name, this.phone);
    }

}

const ob = new ConstructUser().setName("Artem").setPhone("05").build();

console.log(ob);
