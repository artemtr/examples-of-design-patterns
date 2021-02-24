interface IVisitor {
    visit(item: Employee);
}

class IncomeVisitor implements IVisitor {
    visit(item: Employee) {
        if (item instanceof Clerk) {
            item.income *= 1.1;
        } else {
            item.income *= 1.3;
        }
    }
}

class VacationVisitor implements IVisitor {
    visit(item: Employee) {
        if (item instanceof Clerk) {
            item.vactionDays += 1;
        } else {
            item.vactionDays += 3;
        }
    }
}

interface IVisitable {
    accept(v: IVisitor);
}

class Employee implements IVisitable {
    constructor(
        public name: string,
        public income: number = 10000,
        public vactionDays: number = 30,
    ) { }

    public accept(v: IVisitor) {
        v.visit(this);
    }
}

class Clerk extends Employee {
    constructor(name: string) {
        super(name);
    }
}

class Employees implements IVisitable {
    constructor(
        public employees: Employee[] = []
    ) { }

    public accept(v: IVisitor) {
        this.employees.forEach(e => e.accept(v));
    }
}

export class VisitorPattern {
    public run(): void {
        const list = new Employees([new Clerk('Alan'), new Employee('Tim'), new Employee('Zoe')]);

        list.accept(new IncomeVisitor());
        list.accept(new VacationVisitor());
    }
}