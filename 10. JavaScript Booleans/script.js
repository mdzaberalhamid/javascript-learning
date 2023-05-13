// Boolean function
// Example 1
// document.getElementById("demo").innerHTML = Boolean(9 > 6);
// Example 2
// document.getElementById("demo").innerHTML = 1 > 3;

// Everything with a value is true
// document.getElementById("demo").innerHTML = 
// "100 is " + Boolean(100) + "<br>" +
// "3.14 is " + Boolean(3.14) + "<br>" + 
// "-15 is " + Boolean(-15) + "<br>"+ 
// "String 'False' is " + Boolean("False") + "<br>";

// Everything without a value is false
// Exmaples
// let x = 0
// let x = -0
// let x = ""
// let x;
// let x = null;
// let x = false;
// let x = 10 / "Hi";
// document.getElementById("demo").innerHTML = Boolean(x);

// Javascript booleans as objects
// let x = false;
// document.getElementById("demo").innerHTML = typeof x;
// let y = new Boolean(true);
// document.getElementById("demo").innerHTML = typeof y;
// let a = true;
// let b = new Boolean(true);
// document.getElementById("demo").innerHTML = (a == b);   // true
// document.getElementById("demo").innerHTML = (a === b);  // false

// Comparing two JavaScript objects always return false.
// let c = new Boolean(true);
// let d = new Boolean(true);
// document.getElementById("demo").innerHTML = (c == d);   // false
// document.getElementById("demo").innerHTML = (c === d);   // false

