const net = require('net')

exports.send = function (socket, msg) {
    socket.end(msg)
}

exports.receive = function (socket, msg) {
    socket.end(`${msg} received`)
}