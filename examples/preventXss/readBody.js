'use strict';

module.exports = function readBody(req) {
    return new Promise(resolve => {
        const chunks = [];

        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => resolve(Buffer.concat(chunks).toString()));
    });
};
