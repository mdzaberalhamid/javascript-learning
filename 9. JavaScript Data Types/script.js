// JavaScript Data Types

// Numbers
let age = 29;
let weight = 50;

// Strings
let color = "green";
let lastName = "Hamid";

// Booleans
let a = true;
let b = false;

// Object
const person = {firstName: "John", lastName: "Doe"};

// Array object
const cars = ["BMW", "Nissan", "toyota"];

// Date object
const date = new Date("2023-03-09");

// Adding a number with a string
let result = 5 + "Cars";
document.getElementById('demo').innerHTML = result;     // result 5Cars

// Adding two numbers with a string
let result2 = 1 + 2 + "Cars";
// document.getElementById('demo2').innerHTML = result2;   // result 3Cars

// Now, adding a string with two numbers
let result3 = "Cars" + 5 + 9;
// document.getElementById('demo3').innerHTML = result3;   // result Cars59

// JavaScript Strings Examples
let carName1 = "Volvo X1";
let carName2 = "Volvo X2";
let msg = "I'm learning JavaScript";
let ans1 = "'JS' short for JavaScript";
let ans2 = 'JavaScript file extention is ".js"';

document.getElementById('demo4').innerHTML = 
msg + "<br>" + ans1 + ". " + ans2;

// JavaScript exponential notation
let num1 = 1.5e3;
let num2 = 5e4;
let num3 = 1000e-3;

// document.getElementById('demo5').innerHTML = num1;
// document.getElementById('demo6').innerHTML = num2;
document.getElementById('demo7').innerHTML = num3;

// JavaScript Bigint
let bigNum = BigInt("123456789012345678901234567890");
document.getElementById('demo8').innerHTML = bigNum;

// JavaScript Booleans
let num4 = 2;
let num5 = 2;
let num6 = 5;

document.getElementById('demo9').innerHTML = 
(num4 == num5) + " and " + (num5 == num6);

// JavaScript Arrays
let fruits = ['Mango', 'Banana', 'Apple'];
document.getElementById('demo10').innerHTML = fruits[2];

// JavaScript Objects
const man = { name:"John", age:29, eyecolor:"blue" };
document.getElementById('demo11').innerHTML = 
man.name + " is " + man.age + " years old!";

// JavaScript Typeof Operator
let message = "Hi, are you there?";
let undef;
document.getElementById('demo12').innerHTML = 
typeof message + " | " + typeof 10 + " | " + undef;

// JavaScript Empty Value with type
let empty = "";
document.getElementById('demo13').innerHTML = 
"Value is: " + empty + "<br>But, type is: " + typeof empty;