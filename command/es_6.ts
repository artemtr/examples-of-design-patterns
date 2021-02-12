class Cockpit {
    private command: any;

    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
}

class Turbine {
    private state: boolean;

    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class OnCommand {
    private turbine: any;

    constructor(turbine) {
        this.turbine = turbine;
    }

    execute() {
        this.turbine.on();
    }
}

class OffCommand {
    private turbine: any;

    constructor(turbine) {
        this.turbine = turbine;
    }

    execute() {
        this.turbine.off();
    }
}