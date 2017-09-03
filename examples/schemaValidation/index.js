'use strict';

const createValidatingObject = (obj, schema) => new Proxy(obj, {
    get(target, prop) {
        const actualType = typeof target[prop];

        if (schema[prop] && actualType !== schema[prop]) {
            throw new Error(
                `Expected ${prop} to be of type ${schema[prop]}, but got ${actualType}.`
            );
        }

        return target[prop];
    },

    set(target, prop, value) {
        const actualType = typeof value;

        if (schema[prop] && actualType !== schema[prop]) {
            // TODO: demonstrate return false
            throw new Error(
                `Expected ${prop} to be of type ${schema[prop]}, but got ${actualType}.`
            );
        }

        target[prop] = value;
        return true;
    },
});

const schema = {
    name: 'string',
    age: 'number',
};

const person = createValidatingObject({
    name: 'Roy',
    age: 20,
}, schema);

console.log(`${person.name} is ${person.age} years old`);
person.age = 'foo';
