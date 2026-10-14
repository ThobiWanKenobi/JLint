// Class declaration with fields, private members, static, getter, and a method.
class Counter {
    count = 0;
    #secret = 42;
    static instances = 0;

    constructor(start) {
        this.count = start;
        Counter.instances++;
    }

    get secret() {
        return this.#secret;
    }

    increment() {
        this.count++;
    }
}

// Subclass with `super`.
class LoudCounter extends Counter {
    increment() {
        super.increment();
        console.log(this.count);
    }
}

// Named class expression: `Inner` is only visible inside the class body.
const Thing = class Inner {
    clone() {
        return new Inner();
    }
};
