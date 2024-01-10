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
let txt7 = "     Javascript";
console.log(txt7.length);   // 15
let txt8 = txt7.trim();
console.log(txt8.length);   // 10

let txt9 = "   Hi ";
console.log(txt9.length);   // 6
let txt10 = txt9.trimStart();
console.log(txt10.length);  // 3
let txt11 = txt9.trimEnd();
console.log(txt11.length);  // 5

// JavaScript String Padding
let txt12 = "5";
let txt13 = txt12.padStart(4,"1");
console.log(txt13);         // 1115
let txt14 = txt12.padEnd(3,"H");
console.log(txt14);         // 5HH
let num1 = 3;
let str1 = num1.toString();
console.log(typeof str1);   // string
console.log(str1.padEnd(4,"9")); // 3999

// JavaScript String repeat()
let txt15 = "JS";
console.log(txt15.repeat(2));   // JSJS

// Replacing String Content
let txt16 = "I\'m learning Javascript!";
console.log(txt16);
console.log(txt16.replace("Javascript","React"));

// JavaScript String ReplaceAll()
let text = "I like dogs. Dogs are very easy to pet. Dogs are very popular.";
console.log(text);
text = text.replaceAll("dogs","cats");
text = text.replaceAll("Dogs","Cats");
console.log(text);

// JavaScript String split()
let str2 = "a,b,c,d,e";
const arr = str2.split(",");
console.log(arr[0]);    // a
console.log(arr[3]);    // d

