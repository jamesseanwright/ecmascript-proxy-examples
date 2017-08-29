'use strict';

const protectObject = (obj, blacklist) => new Proxy(obj, {
    deleteProperty(target, prop) {
        if (blacklist.includes(prop)) {
            throw new Error(`Unable to delete property ${prop} from sealed object`);
        }

        return target[prop];
    }
});

const person = {
    name: 'Bob',
    age: 16,
};

const blacklist = ['name'];

const sealedPerson = protectObject(person, blacklist); // TODO: Add blacklist as second step
delete sealedPerson.age;
delete sealedPerson.name;
console.log(sealedPerson);
