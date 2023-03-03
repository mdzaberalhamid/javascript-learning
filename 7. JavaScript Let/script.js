// JavaScript Let 

// let Can't redeclared
// example
let x1 = 'A string';
// let x1 = 0;               // Will create error

// var can redeclared
// example
var x2 = 'A String';
var x2 = 10;                // Will create no error

// Block scope
// example
{
    let x3 = 5;             // will work in the scope
}
                            // but not outside the scope

// with var you can...
{
    var x3 = 3;             // will work
}
                            // x3 can also be used here

// Redeclaring Variables with var
// example
    var x4 = 2;             // x4 is 2

{
    var x4 = 4;             // x4 is now 4
}                           
                            // x4 is also 4 here

// Redeclaring using let
// example
let x5 = 5;              // x5 is 5
{
    let x5 = 10;         // x5 is 10
}
                         // x5 is 5 here!

// var and let hoisting
// example
myName1 = 'Z';
var myName1;             // Thats ok

myName2 = 'H'
let myName2 = 'A';             // Thats not ok
