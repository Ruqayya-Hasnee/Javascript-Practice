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

// Objects
// 5. Create an object representing a book with properties like title, author, and year.
const book = {
    title: "How To Program",
    author: "Deite & Deitel",
    year: 1992,
}
     console.log("Main array:",book)

// 6. Add a new property to the book object and then delete an existing property.
book.color =  'blue';
console.log("Adding one more property:",book);
delete book.year;
console.log("Deletion of one property:",book);

// Sets
// 7. Create a Set from an array of numbers. Add a new number and remove an existing one.
let numbers = [12, 36, 4, 15, 23];
let newNum = new Set(numbers);
console.log("Initial Array:",newNum);
newNum.add(11);
console.log("After Adding:",newNum);
newNum.delete(15);
console.log("After Deleting:",newNum);
// 8. Given two Sets, find their intersection (common elements).
function intersection(setA, setB) {
  return new Set([...setA].filter(element => setB.has(element)));
}
const setA = new Set([14, 8, 31, 11]);
const setB = new Set([1, 14, 15, 11]);
const result = intersection(setA, setB);
console.log(result);

// Functions
// 9. Write a function that takes two numbers as parameters and returns their sum.
function sumOfNum(a,b){
    sum = a + b;
    return sum;
}
console.log("Sum of numbers is:",sumOfNum(5,10));
// 10. Create an arrow function that takes height, width as param and calculates the area of a rectangle.
let rectangleArea = (height,Width) => {
    let mul = height * Width;
    return mul;
}
console.log("Area of rectangle is:",rectangleArea(12,10));