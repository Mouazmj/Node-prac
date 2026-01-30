const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    let path = './views'

    if (req.url === '/') {
        res.statusCode = 200
        path += '/index.html'
    } else if (req.url === '/about') {
        res.statusCode = 200
        path += '/about.html'
    } else if (req.url === '/om-mig') {
        res.statusCode = 301
        res.setHeader('Location', '/about')
        res.end()
        return;
    } else {
        res.statusCode = 404
        path += '/404.html'
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.statusCode = 500
            res.end('Error in server')
        } else {
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Server running on port 3000')
})