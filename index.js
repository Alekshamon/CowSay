const information = require('./information');
const cowsay = require('cowsay');

const message = `Hi, my name is ${information.name} and I'm from ${information.campus} campus student.`;

console.log(cowsay.say({
    text: message,
    e: "oO",
    T: "U"
}));
