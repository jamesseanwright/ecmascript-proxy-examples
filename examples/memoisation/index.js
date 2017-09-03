'use strict';

const DELIMITER = ', ';

const stringifyArgs = args => args.join(DELIMITER);

function memoise(func) {
    const computations = new Map();

    return new Proxy(func, {
        apply(targetFunc, thisArg, args) {
            const key = stringifyArgs(args);

            if (computations.has(key)) {
                console.log('Memoisation found for args', key);
                return computations.get(key);
            }

            const result = targetFunc.apply(thisArg, args);
            computations.set(key, result);

            return result;
        }
    });
}

const add = (...args) => args.reduce((total, number) => total += number, 0);
const memoisedAdd = memoise(add);

console.log(memoisedAdd(5, 3));
console.log(memoisedAdd(2, 4, 6));
console.log(memoisedAdd(2, 4, 6));
