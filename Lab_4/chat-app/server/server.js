//Patrick Flinner
//Lab 4
//April 19, 2018

const
    express = require('express'),
    path = require('path')

const
    app = express(),
    server = require('http').Server(app)

app.use(express.static(path.join(__dirname, '..', '/client')))
require('./sockets')(server)

server.listen(8080)
