'use strict';

const http = require('http');
const url = require('url');
const readBody = require('./readBody');
const connectToDb = require('./db'); // pretend this is a third-party database lib...
const db = connectToDb();

const PORT = 8080;
const HOME_KEY = 'home';

const routes = new Map([
    ['GET', new Map([
        ['/', (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(db.get(HOME_KEY));
        }],
    ])],

    ['POST', new Map([
        ['/update-home-content', (req, res) => readBody(req)
            .then(body => db.set(HOME_KEY, body))
            .then(() => {
                res.writeHead(200);
                res.end('OK');
            })
        ],
    ])],
]);

const server = http.createServer((req, res) => {
    const routesForMethod = routes.get(req.method);
    const { pathname } = url.parse(req.url)

    if (!routesForMethod.has(pathname)) {
        res.writeHead(404);
        res.end('Not found');
        return;
    }

    routesForMethod.get(pathname)(req, res);
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
