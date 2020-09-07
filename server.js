const http = require('http')
const greeter = require('./greeter')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain',
    'Access-Control-Allow-Origin': 'http://localhost:5000',
  })

  res.end(greeter('Pepe'))
})

server.listen(8009)
