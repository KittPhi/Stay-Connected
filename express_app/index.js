const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000

app.get('/', (request, response) => {
    console.log('inside get router')
    // response.sendFile(__dirname + '/index.html');

    var dataToSend;
    var largeDataSet = []; // use an array to append the data

    const python = spawn('python', ['main.py'])
    // const python = spawn('python', ['hello.py']);  // python hello.py
    // const python = spawn('python', ['args.py','movie1','movie2']);;
    // const python = spawn('python', ['import_json.py']);

    python.stdout.on('data', (data) => {    // python script outputs to console, then buffer outputs data into readable string
        console.log('Pipe data from python');
        dataToSend = data.toString(); // hello.py and args.py
        // largeDataSet.push(data); // import_json.py
    });
    
    python.on('close', (code) => {  // 'close' is emitted when stdio child_process has been closed
        console.log(`close python process ${code}`);
        response.send(dataToSend);  // hello.py and args.py
        // response.send(largeDataSet.join("")) // import_json.py
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))