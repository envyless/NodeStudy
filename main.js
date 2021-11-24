// @ts-check
/* eslint-disable-next-line no-console */

// webpack, bundler

// npm homepage,
// actionhero

const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('hello!')
})

const PORT = 8080

server.listen(PORT, "0.0.0.0", () => {
    console.log('the server is listening at port: {0}', PORT)
})