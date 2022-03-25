const Bltp = require('./bltp')
const net = require('net');
require('./server');

const socket = net.connect({ port: 8080, host: '127.0.0.1' });

socket.on('connect', () => {
    Bltp.send(socket, "hey");
});
socket.on('data',(data)=>{
    console.log(`client received:${data}`)
})