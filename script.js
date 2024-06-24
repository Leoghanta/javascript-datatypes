/* Javascript uses specific data types to allow different types of
 * calculations to be performed on that bit of memory.
 * The common types are:
 * Number, String, Boolean, Undefined, Null
 */

// Number data types hold any number, positive or negative, with or without decimal point
let length = 5;
let speed = 30.5;
let temperature = -195.44;

// String data types are any text (or numbers representing text) encased in quote marks.
let myName = "Jimi";
let letter = "A";
let phone = "(01234) 567890";

// Boolean data types can be true or false, and nothing else.
let discountApplied = true;
let taskComplete = false;

// Null is a special data type reserved for when there is memory allocated with nothing assigned.
let nothing = null;

// Undefined is a special data type reserved for when there is no memeory allocated.
let emptyToiletRoll;

console.error(nothing);
console.error(emptyToiletRoll);


// Arithmetic Operations

let sum = 45 + 54;          
let difference = 32 - 16;
let product = 12 * 5;
let quotient = 45 / 5;
let modulus = 13 % 2;

// Number variables can also be used in arithmetic operations
let jacket = 18;
let scarf = 2;

let cost = jacket + scarf;
let tax = cost * 0.2;
let total = cost + tax;
let average = total / 2;

console.log(cost, tax, total, average);

// When using addition with any string, the strings concatenate.
let hello = "Hello, ";
let world = "World!";
let greeting = hello + world;
console.log(greeting);


// Null acts as a number, so the result here will 12.
let x = null;
let y = 12;
console.info(x+y);

// Undefineds act as a string, so the result here is undefined15
let a;
let b = 15;
console.info(a+b);


