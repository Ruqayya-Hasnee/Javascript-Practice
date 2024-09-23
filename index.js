// Variables
// 1. Declare variables using let, const, and var. Assign different data types to them.
// Data types are number, string, boolean, null, undefined, objects and arrays etc.
let num = 10;
let name = "Ruqayya";
var isPass = true;
var a = null;
const pi = 3.14;
const z = undefined;
// just declaration of different variable assigned with different data types and prints nothing on screen.

// 2. Create a variable to store your age, then add 5 to it and log the result.
let age = '21';
age = Number(age) + 5;    //Number(age) converts age from string to number
console.log("sum of age + 5 is:",age);
// sum of age + 5 is: 26

// Arrays
// 3. Create an array of your favorite fruits. Add a new fruit to the end and remove the first one.
let favFruits = ["mango", "apple", "plum", "banana", "cherry"];
console.log("My favourite fruits are: ",favFruits);
// My favourite fruits are: ["mango", "apple", "plum", "banana", "cherry"]

favFruits.push("guava");
console.log("Adding of one more fruit to end of favFruits:",favFruits);
// Adding of one more fruit to end of favFruits: ['mango', 'apple', 'plum', 'banana', 'cherry', 'guava']

favFruits.shift();
console.log("Deletion of first fruit from favFruits:",favFruits);
// Deletion of first fruit from favFruits: ['apple', 'plum', 'banana', 'cherry', 'guava']

// 4. Given an array of numbers, find the sum of all even numbers.
function sumOfEvenNums(nums){
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 === 0){
        sum += nums[i];
    }
}
return sum;
}
let nums = [10,5,6,8,7,11];
console.log("Sum of even numbers  is:",sumOfEvenNums(nums));
// Sum of even numbers  is: 24

// Objects
// 5. Create an object representing a book with properties like title, author, and year.
const book = {
    title: "How To Program",
    author: "Deite & Deitel",
    year: 1992,
}
     console.log("Main Object:",book)
     // Main Object: {title: 'How To Program', author: 'Deite & Deitel', year: 1992}

// 6. Add a new property to the book object and then delete an existing property.
book.color =  'blue';
console.log("Adding one more property to main object:",book); 
// Adding one more property to main object: {title: 'How To Program', author: 'Deite & Deitel', year: 1992, color: 'blue'}

delete book.year;
console.log("Deletion of a property from main object:",book);
// Deletion of a property from main object: {title: 'How To Program', author: 'Deite & Deitel', color: 'blue'}

// Sets
// 7. Create a Set from an array of numbers. Add a new number and remove an existing one.
let newArray = [12, 36, 4, 15, 23];
let newSet = new Set(newArray);
console.log("New Set created from array:",newSet);
// New Set created from array: {12, 36, 4, 15, 23}

newSet.add(11);
console.log("New set after adding a number:",newSet);
// New set after adding a number: {12, 36, 4, 15, 23, …}

newSet.delete(15);
console.log("New set after deleting a number:",newSet);
// New set after deleting a number: {12, 36, 4, 23, 11}

// 8. Given two Sets, find their intersection (common elements).
function intersection(setA, setB) {
  return new Set([...setA].filter(element => setB.has(element)));
}
const setA = new Set([14, 8, 31, 11]);
const setB = new Set([1, 14, 15, 11]);
const result = intersection(setA, setB);
console.log("Intersection of two sets is:",result);
// Intersection of two sets is: {14, 11}

// Functions
// 9. Write a function that takes two numbers as parameters and returns their sum.
function sumOfNum(a,b){
    sum = a + b;
    return sum;
}
console.log("Sum of numbers is:",sumOfNum(5,10));
// Sum of numbers is: 15

// 10. Create an arrow function that takes height, width as param and calculates the area of a rectangle.
let rectangleArea = (height,Width) => {
    let mul = height * Width;
    return mul;
}
console.log("Area of rectangle is:",rectangleArea(12,10));
// Area of rectangle is: 120

// Array Methods
// 11. Use map() to create a new array with the squares of numbers from another array.
const number = [2, 3, 5, 8, 7];
const squareNum = number.map ((value) => {
    return value*2;
})
console.log("Original numbers are:",number);
// Original numbers are: [2, 3, 5, 8, 7]

console.log("Square of original numbers using map is:",squareNum);
// Square of original numbers using map is: [4, 6, 10, 16, 14]

// 12. Use filter() to create an array of even numbers from an array of mixed numbers.
const mixNum = [25, 7, 6, 10, 17, 21];
const evenNum = mixNum.filter((value) => {
    return value % 2 == 0;
})
console.log("Array of mixed numbers is:",mixNum);
//Array of mixed numbers is: [25, 7, 6, 10, 17, 21]
console.log("Even numbers using filter are:",evenNum);
// Even numbers using filter are:  [6, 10]


// 13. Use reduce() to find the sum of all numbers in an array.
const digits = [10, 1, 4, 14, 21];
const sumOfDigits = digits.reduce((value,sum) => {
return value + sum;
})
console.log("Sum of numbers using reduce method is:",sumOfDigits);
// Sum of numbers using reduce method is: 50

// Object Methods
// 14. Use Object.keys() to get an array of all properties in an object.
let student = {
    name: "Ruqayya",
    rollNo: 1145,
    course: "javascript",
}
let keys =Object.keys(student);
console.log("Object keys are:",keys);
//  Object keys are:  ['name', 'rollNo', 'course']
 
// 15. Use Object.values() to get an array of all values in an object.
let stud = {
    name: "Ruqayya",
    rollNo: 1145,
    course: "javascript",
}
let values =Object.values(stud);
console.log("Object values are:",values);
// Object values are: ['Ruqayya', 1145, 'javascript']

// 16. Use Object.entries() to log each key-value pair of an object.
let std = {
    name: "Ruqayya",
    rollNo: 1145,
    course: "javascript",
}
let enteries =Object.entries(std);
console.log("Object enteries are:",enteries);
/* Object enteries are:
   ['name', 'Ruqayya']
   ['rollNo', 1145]
   ['course', 'javascript'] */

// Set Methods
// 17. Use Set.has() to check if a Set contains a specific value.
let set = new Set([7, 6, 3]);
let val = set.has(7);
console.log(val);
// true

// 18. Use Set.size to get the number of elements in a Set.
let mySet = new Set([7, 6, 3]);
let size = mySet.size;
console.log("Size of set is:",size);
// Size of set is: 3

// 19. Convert a Set to an Array and vice versa.
let aSet = new Set([1, 2, 5, 7, 12, 21]);
let anArray = [...aSet];
console.log("Convertion of set to array:",anArray);
// Convertion of set to array: [1, 2, 5, 7, 12, 21]

let myArray = [1, 2, 5, 7, 12, 21];
let makeSet = new Set(myArray);
console.log("Convertion of array to set:",makeSet);
//Convertion of array to set: {1, 2, 5, 7, 12, …}

// Advanced Functions
// 20. Write a function that accepts any number of arguments and returns their sum.
function myFunction(...num){
 return num.reduce((sum, num) => {
    return sum + num});
}
console.log(myFunction(1, 5, 1));
// 7

console.log(myFunction(7, 6, 3));
// 16

// 21. Create a function that returns another function (closure example).
var a = 6;
function outer(){
function inner(){
    console.log(a);
}
return inner();
}
var close = outer();
console.log(close);
// 6

// 22. Write a function that can be called with or without the 'new' keyword.
function _student(){
   return "I am a student of BSSE.";
}
console.log(_student());
// I am a student of BSSE.

function person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new person("Ruqayya", 21);
console.log(person1.name); 
// Ruqayya
console.log(person1.age);  
// 21

