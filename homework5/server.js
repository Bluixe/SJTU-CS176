const net = require('net');
const Bltp = require('./bltp')

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(`Server received:${data}`);
        Bltp.receive(socket, data)
    });
});

server.listen(8080);