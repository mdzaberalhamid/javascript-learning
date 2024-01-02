// JavaScript Strings
let txt = 'Zaber';
console.log(txt);

let car1 = 'Marcedes';
let car2 = "BMW";
console.log(car1, car2);

let q1 = "It's a ball.";
console.log(q1);

let q2 = "Your name 'Angus'?";
console.log(q2);

let q3 = 'Did you see that "cigar" type thing?';
console.log(q3);

// String Length
txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt);
console.log(txt.length);

// Escape Character
txt1 = "Do you know how to use \"JavaScript\" for web development?";
console.log(txt1);
txt2 = 'Yes, I know \'JavaScript\' and how to use it!';
console.log(txt2);
txt3 = "The character \\ is called backslash.";
console.log(txt3);

// Breaking Long Code Lines
txt4 = "Hi, my name is " +
"Zaber";
console.log(txt4);

// JavaScript Strings as Objects
let name = 'Zaber';
console.log(typeof name);
let firstname = new String('Zaber');
console.log(typeof firstname);

// String objects can produce unexpected results
console.log(name == firstname);
console.log(name === firstname);

// Comparing two JavaScript objects always returns false
let x = new String('Z');
let y = new String('Z');
console.log(x,y);
console.log(x == y);
console.log(x === y);
