// JavaScript const

// Can't reassigned
// example
const PI = 3.1416;
// const PI = 3.14;        // will produce error

// Must assigned first
// const Z;                // error
const Z = 1.22;            // thats ok

// Creating a constant array
const foods = ['Graps','Banana','Mango'];

// Changing an element of the const array
foods[0] = 'Apple';

// Adding an element of the const array
foods.push('Watermelon');

// Testing the const array
document.getElementById('demo').innerHTML = foods;
