/*
const amount = 12;

if(amount < 10) {
    console.log('It is a small number');
}

else {
    console.log('It is a large number');

}

console.log(`It is my first node app`);
*/

//Modules in Node.js

// global variables 
// to access the variables we use require

const name = require('./names');
const sayHi = require('./utils');
console.log(name);

const data = require('./alternative-method-to-export-module');
console.log(data);

sayHi('Muzammil Hassan');
sayHi(name.ahmed); 
sayHi(name.hashir);