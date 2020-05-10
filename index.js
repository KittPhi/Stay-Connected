const express = require('express');
const { spawn } = require('child_process')
const app = express();   // replaces const express = require('express')(); 
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;
var bodyParser = require('body-parser');
const submitRating = require('./public/json.js')

// allows http://localhost:3000/hello.html in public folder
app.use(express.static("public"));

// url and json body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express app with one get router
app.get('/', (request, response) => {
    console.log('inside get router')
    // response.sendFile(__dirname + '/index.html');

    var dataToSend;

    // spawn new child_process
    const python = spawn('python', ['main.py']);  // python hello.py

    python.stdout.on('data', (data) => {    // python script outputs to console, then buffer outputs data into readable string
        console.log('Pipe data from python');
        dataToSend = data.toString();
    });
    
    python.on('close', (code) => {  // 'close' is emitted when stdio child_process has been closed
        console.log(`close python process ${code}`);
        response.send(dataToSend);
    });
});

io.on('connection', (socket) => {

    console.log('socket connected');
    socket.on('chat', (message) => {
        io.emit('chat', message);
    });

    socket.on('callServer', (data) => {
        console.log(data);
        socket.emit('connect', 'Hello Client');
    })
 
    socket.on('message', (data) => {
        console.log('message')
        console.log(data);
    })

 });
 
server.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.post('/formSubmit', (request, response) => {
    console.log(request.body.movie.name);
    response.send("Success");
})

app.post('/car', (request, response) => {
    console.log(request.body.make);
    console.log(request.body.model);
    console.log(request.body.year);
    console.log(request.body.color);
    response.send("Success!");
})