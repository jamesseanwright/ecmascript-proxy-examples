'use strict';

const person = {
    name: 'Bob',
    age: 50,
};

const proxy = new Proxy(person, {
    get(target, prop) {
        console.log(`Accessing ${prop}!`);
        return target[prop];
    },

    set(target, prop, value) {
        console.log(`Setting ${prop} to ${value}!`);
        target[prop] = value;
        return true;
    },
});

console.log(`${proxy.name} is ${proxy.age} years old.`);

proxy.name = 'Rob';
proxy.age = 51;

console.log(`${proxy.name} is ${proxy.age} years old.`);
console.log('Original target:', person);
