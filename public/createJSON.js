'use strict';
const fs = require('fs');

let rating = {
    movie: 'Forrest Gump',
    rating: 5,
    movie: 'Pulp Fiction'
};

let data = JSON.stringify(rating);

fs.writeFileSync('file.json', data, finished);

function finished(error) {
    console.log('success');
}

