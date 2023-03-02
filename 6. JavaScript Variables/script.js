// JavaScript Variables
// JavaScript Variables using var
var a = 1;
var b = 2;
var c = a + b;

document.getElementById('demo').innerHTML = 
'The value of the variable c is ' + c; 

// JavaScript Variables using let
let d = 4;
let e = 5;
let f = e - d;

document.getElementById('demo1').innerHTML = 
'The value of the variable f is ' + f;

// JavaScript Variables Undeclared
g = 7;
h = 8;
i = g + h - 6;

document.getElementById('demo2').innerHTML = 
'The value of the undeclared variable i is ' + i;

// Note: Always declare JS variables using let, var or const keyword.

// JavaScript Variables using const
const price1 = 20;
const price2 = 80;
// const values cannot be changed.
let total = price1 + price2;

document.getElementById('demo3').innerHTML = 
'Total price is ' + total;