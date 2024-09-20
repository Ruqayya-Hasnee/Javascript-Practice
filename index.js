// Variables
// 1. Declare variables using let, const, and var. Assign different data types to them.
// Data types are number, string, boolean, null, undefined, objects and arrays etc.
let num = 10;
let name = "Ruqayya";
var isPass = true;
var a = null;
const pi = 3.14;
const z = undefined;

// 2. Create a variable to store your age, then add 5 to it and log the result.
let age = 21;
age = Number(age) + 5;    //Number(age) converts age from string to number
console.log(age);

// Arrays
// 3. Create an array of your favorite fruits. Add a new fruit to the end and remove the first one.
let favFruits = ["mango", "apple", "plum", "banana", "cherry"];
console.log("My favourite fruits are: ",favFruits);
favFruits.push("guava");
console.log("Adding of one more fruit to end:",favFruits);
favFruits.shift();
console.log("Deletion of first fruit:",favFruits);

// 4. Given an array of numbers, find the sum of all even numbers.
let numbers = [13, 10, 2, 4, 8, 1, 9, 7];
let sum = 0;
for(let i of numbers ){   //using for-of loop
    sum += i;
}
console.log(sum);