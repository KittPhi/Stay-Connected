// $('#rating').serializeJSON();
// // convert to String
// var jsonString = JSON.stringify(obj);

const { spawn } = require('child_process');

function changeColor(newColor) {
    var result = document.getElementById('color')    
    result.style.color = newColor;
};

const temp = [];
function submitRating() {

    var result = document.getElementById('result')    
    result.after('the similar movie is!');
    console.log('here')

    const python = spawn('python', ['main.py']);  // python hello.py
    
    python.stdout.on('data', (data) => {    // python script outputs to console, then buffer outputs data into readable string
        console.log('Pipe data from python');
        dataToSend = data.toString();

        temp.push(parseFloat(data));
        console.log(temp);
    });

    python.on('close', (code) => {  // 'close' is emitted when stdio child_process has been closed
        console.log(`close python process ${code}`);
        response.send(dataToSend);
    });
}


// var form = document.getElementById('form');
// form.addEventListener('submit', handleFormSubmit);
// const handleFormSubmit = event => { };


