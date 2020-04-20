
// var socket = io.connect('http://localhost:3000/');
var socket = io();
socket.on('connect', () => {
    // function callback 
    socket.emit('callServer', 'Hello Server');


});
