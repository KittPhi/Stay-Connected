
// const form = document.getElementByClassName('.rating-form')[0];
// form.addEventListener('submit', handleFormSubmit);

// const handleFormSubmit = event => {/* omitted for brevity */};

// The serializeJSON function returns a JavaScript object, not a JSON String
var obj = $('#rating').serializeJSON();

console.log(obj);

// To convert into a JSON String, use the JSON.stringify method
var jsonString = JSON.stringify(obj);

console.log(jsonString);

function handleFormSubmit(newColor) {
    var result = document.getElementById('result')
    result.style.color = newColor;

};

var form = document.getElementById('form');

form.addEventListener('submit', handleFormSubmit);



