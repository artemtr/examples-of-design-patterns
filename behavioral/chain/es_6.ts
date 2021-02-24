class HandlerChain {
    setNextObj(nextObjInChain) {
    }

    processMultiple(req) {
        console.log("Handler chain 4");
    }
}

class Multiple {
    multiple: any;

    constructor(multiple) {
        this.multiple = multiple;
    }

    getMultiple() {
        return this.multiple;
    }

}


class MultipleofTwoHandler extends HandlerChain {
    private nextObjInChain: any;

    constructor() {
        super()
        this.nextObjInChain = new HandlerChain()
    }

    setNextObj(nextObj) {
        this.nextObjInChain = nextObj;
    }

    processMultiple(req) {

        console.log("3 handler");

        this.nextObjInChain.processMultiple(req);

    }
}

class MultipleofThreeHandler extends HandlerChain {
    private nextObjInChain: HandlerChain;

    constructor() {
        super()
        this.nextObjInChain = new HandlerChain()
    }

    setNextObj(nextObj) {
        this.nextObjInChain = nextObj;
    }

    processMultiple(req) {

        console.log("2 handler");

        this.nextObjInChain.processMultiple(req);

    }
}

class MultipleofForHandler extends HandlerChain {
    private nextObjInChain: HandlerChain;

    constructor() {
        super()
        this.nextObjInChain = new HandlerChain()
    }

    setNextObj(nextObj) {
        this.nextObjInChain = nextObj;
    }

    processMultiple(req) {

        console.log("1 handler");

        this.nextObjInChain.processMultiple(req);

    }
}


//configuring the chain of handler objects
var c1 = new MultipleofTwoHandler();
var c2 = new MultipleofThreeHandler();
var c3 = new MultipleofForHandler();
c1.setNextObj(c2);
c2.setNextObj(c3);

//the chain handling different cases
c1.processMultiple(new Multiple(95));