'use strict';

const getFormattedDate = require('./getFormattedDate');

const formattableMethods = [
    'log',
    'info',
    'warn',
    'error',
];

const methodColours = new Map([
    ['warn', '\x1b[1;33m'],
    ['error', '\x1b[1;31m'],
    ['default', '\x1b[0m'],
]);

function format(method, values) {
    const defaultColour = methodColours.get('default');
    const colour = methodColours.has(method) ? methodColours.get(method) : defaultColour;

    return `${colour}[${getFormattedDate()}] - ${values.join(' ')}${defaultColour}`;
}

const fancyConsole = new Proxy(console, {
    get(target, prop) {
        if (formattableMethods.includes(prop)) {
            return (...values) => target[prop](format(prop, values));
        }

        return target[prop];
    },
});

fancyConsole.log('Hello', 'JS', 'Roundabout!');
fancyConsole.warn('Warning!');
fancyConsole.error('Oh no!', 'Error!');
