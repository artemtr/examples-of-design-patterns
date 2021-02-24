abstract class Form {

    ob: IUserResource;

    constructor(ob: IUserResource) {
        this.ob = ob;

    }

    abstract show();
}

interface IUserResource {

    getTitle();

    getPhone();
}

class Artist {
    title = "Artem";
    phone = 123;

    getName() {
        return this.title;
    }

    getUserPhone(): number {
        return this.phone;
    }


}

class UserResource implements IUserResource {
    artist: any;

    constructor(ob) {
        this.artist = ob;
    }

    getPhone(): number {
        return this.artist.getUserPhone();
    }

    getTitle(): string {
        return this.artist.getName();
    }

}


class FormWeb extends Form {
    show() {
        const phone = this.ob.getPhone();
        const name = this.ob.getTitle();
        console.log(`User input. The name is ${name}. The phone is ${phone}`);

    }
}

const ob = new FormWeb(new UserResource(new Artist()));

const data = ob.show();

console.log(data);