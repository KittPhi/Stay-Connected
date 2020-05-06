const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000

app.get('/', (request, response) => {
    console.log('inside get router')
    // response.sendFile(__dirname + '/index.html');

    var dataToSend;
    var largeDataSet = []; // use an array to append the data

    const python = spawn('python', ['sensors.py'])
    const temperatures = []; // Store readings
    
    python.stdout.on('data', function(data) {
    
        // Coerce Buffer object to Float
        temperatures.push(parseFloat(data));
    
        // Log to debug
        console.log(temperatures);
    });
    
    python.on('close', (code) => {  // 'close' is emitted when stdio child_process has been closed
        console.log(`close python process ${code}`);
        response.send(dataToSend);  // hello.py and args.py
        // response.send(largeDataSet.join("")) // import_json.py
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))