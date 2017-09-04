'use strict';

function lazyLoadObject(path) {
    let result = {};
    let hasLoaded = false;

    return new Proxy(result, {
        get(targetObject, prop) {
            if (!hasLoaded) {
                console.log(`Loading ${path}...`);
                result = require(path);
                hasLoaded = true;
            }

            return result[prop];
        }
    });
}

const person = lazyLoadObject('./person.json');
console.log(person.name);
console.log(person.age);
