'use strict';

class Car {
    constructor(wheelCount) {
        this.wheelCount = wheelCount;
    }

    toString() {
        return `This car has ${this.wheelCount} wheels`;
    }
}

const ValidatingCar = new Proxy(Car, {
    construct(Constructor, args, ProxiedConstructor) {
        const [ wheelCount ] = args;

        if (wheelCount < 3) {
            throw new Error('Cars must have at least 3 wheels!');
        }

        return new Constructor(...args);
    }
});

const car = new ValidatingCar(2);
console.log(car.toString());
