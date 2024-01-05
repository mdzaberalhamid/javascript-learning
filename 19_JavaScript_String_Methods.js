// JavaScript String Methods

// JavaScript String Length
let txt1 = 'This is a string';
console.log(txt1.length);       // 16

// Extracting String Characters
let txt2 = 'Hello world!';
console.log(txt2.charAt(0));    // H
console.log(txt2.charCodeAt(0));    // 72
let txt3 = 'W3Schools';
console.log(txt3.at(1));        // 3
console.log(txt3[0]);           // W

// Extracting String Parts
let txt4 = "Apple, Banana, Mango";
console.log(txt4.slice(7,13));  // Banana
console.log(txt4.slice(7));     // Banana, Mango
console.log(txt4.slice(-5));    // Mango
console.log(txt4.slice(-20,-15));   // Apple

console.log(txt4.substring(-3, 5)); // Apple

console.log(txt4.substr(7,6));  // Banana
console.log(txt4.substr(15,5)); // Mango
console.log(txt4.substr(15));   // Mango
console.log(txt4.substr(-13));  // Banana, Mango

// Converting to Upper and Lower Case
let txt5 = "javascript";
console.log(txt5.toUpperCase());    // JAVASCRIPT
let txt6 = "LOWERCASE";
console.log(txt6.toLowerCase());    // lowercase

// JavaScript String concat()
let txt7 = "Hello";
console.log(txt7.concat(" ", "World!"));    // Hello World!    
console.log(txt7);              // Hello

// JavaScript String trim()
