'use strict';

const cache = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo',
};

const loggingCache = new Proxy(cache, {
    deleteProperty(target, prop) {
        delete target[prop];
        console.log(`Deleted ${prop} from cache`);
        return true;
    },
});

console.log(cache);
delete loggingCache.foo;
console.log(cache);
