'use strict';

function debugSetInterval() {
    let intervalCount = 0;

    global.setInterval = new Proxy(global.setInterval, {
        apply(originalSetInterval, thisArg, args) {
            const [ callback, delay, ...additionalArgs ] = args;
            const timeout = originalSetInterval(() => callback(...additionalArgs), delay);

            console.log(`Interval created! Total:`, ++intervalCount);

            return timeout;
        }
    });

    global.clearInterval = new Proxy(global.clearInterval, {
        apply(originalClearInterval, thisArg, args) {
            const [ timeout ] = args;

            originalClearInterval(timeout);
            console.log(`Interval cleared! Total:`, --intervalCount);
        }
    });
}

debugSetInterval()

const firstInterval = setInterval(
    (firstMessage, secondMessage) => console.log(`${firstMessage} ${secondMessage}`),
    1000,
    'Hello',
    'world!'
);

const secondInterval = setInterval(
    message => console.log(message),
    1200,
    'We`re live from The JS Roundabout'
);

setTimeout(() => clearInterval(firstInterval), 3500);
setTimeout(() => clearInterval(secondInterval), 4000);
