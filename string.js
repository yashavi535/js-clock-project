// String - A string is a sequence of characters (letters, digits, symbols, spaces).
//          In JavaScript, strings are used to store and manipulate text.
//          Strings are immutable (once created, they cannot be changed; operations create new strings).


let name = "abc";
let city = 'Delhi';
let sentence = `Hello, my name is ${name} and I live in ${city}`;
console.log(sentence);


// Template Literals (ES6) - Use backticks (`) , supports multi-line
let age = 20;
let msg = `I am ${age} years old.`;
console.log(msg);

// String methods - 

// 1. length - Returns the number of characters in a string (including spaces).
let str = "Hello World";
console.log(str.length); 

// 2. toUpperCase() - Converts a string to uppercase.
let text = "Hello World";
console.log(text.toUpperCase());

// 3. toLowerCase() - Converts the entire string into lowercase.
let textt = "Hello World";
console.log(textt.toLowerCase());

// 4. includes(substring) - Checks if the string contains the given substring.
let strr = "I love JavaScript";
console.log(str.includes("love"));   
console.log(str.includes("Python")); 

// 5. indexOf(substring) - Returns the index of the first occurrence of the given substring.
let sttr = "I like JS. JS is fun.";
console.log(sttr.replace("JS", "JavaScript"));   
console.log(sttr.replaceAll("JS", "JavaScript"));

// 6. split(separator) - Splits the string into an array based on the separator.
let sstr = "apple,banana,orange";
console.log(sstr.split(",")); 

let content = "Hello World";
console.log(content.split(" ")); 
console.log(content.split("")); 

// 7. trim() - Removes whitespace (spaces, tabs, newlines) from the start and end of a string and does not remove spaces in the middle.
let a = "   Hello World!   ";
console.log(a);           
console.log(a.trim());   







// Summary in short:/-
// length → counts characters.
// toUpperCase() → converts to big letters.
// toLowerCase() → converts to small letters.
// includes() → checks if a word exists.
// replace() → replaces first match.
// split() → breaks string into an array.