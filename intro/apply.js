'use strict';

const round = new Proxy(Math.round, {
    apply(target, thisArg, args) {
        if (args.length === 0) {
            throw new Error('Please provide an argument!');
        }

        return target.apply(thisArg, args);
    }
});

console.log(round(5.5));
