/* toString()
In JavaScript, the toString() method is used to convert a
 value to its corresponding string representation. It is 
 available for most built-in JavaScript types, 
 such as numbers, booleans, arrays, objects, and dates. */
 /*1. Converting a number to a string: */
 var number = 42;
var numberAsString = number.toString();
console.log(numberAsString); // Output: "42"
/* 2.Converting a boolean to a string: */
var flag = true;
var flagAsString = flag.toString();
console.log(flagAsString); // Output: "true"
/* 3.Converting an array to a string: */
var array = [1, 2, 3];
var arrayAsString = array.toString();
console.log(arrayAsString); // Output: "1,2,3"
/* Converting an object to a string: */
var object = { name: "John", age: 30 };
var objectAsString = object.toString();
console.log(objectAsString); // Output: "[object Object]"

/* pop() 
In JavaScript, the pop() method is used to remove 
the last element from an array and return that element. */
var fruits = ['apple', 'banana', 'orange'];
var lastFruit = fruits.pop();
console.log(lastFruit); // Output: "orange"
console.log(fruits); // Output: ["apple", "banana"]

/* push() 
In JavaScript, the push() method is used 
to add one or more elements to the end of an array. */
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

/* sort()
In JavaScript, the sort() method is used to sort the elements 
of an array in place, meaning it modifies the original array. 
The sorting is performed based on the 
Unicode values of the elements by default. Here's an example: */
//example1
var fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "orange"]
//example2
var mixedArray = [10, 2, 5, 1];
mixedArray.sort();
console.log(mixedArray); // Output: [1, 10, 2, 5]
//example3
var numberss = [10, 2, 5, 1];
numberss.sort(function(a, b) {
  return a - b;
});
console.log(numberss); // Output: [1, 2, 5, 10]
//example4
var numbrs = [10, 2, 5, 1];
numbrs.sort((a, b) => a - b);
console.log(numbrs); // Output: [1, 2, 5, 10]

/* splice()
In JavaScript, the splice() method is used to modify an 
array by adding, removing, or replacing elements.
 It can be used to add elements at a specific position, 
 remove elements from a specific position, 
 or both simultaneously. 
Here's the syntax for using splice():*/
//array.splice(start, deleteCount, item1, item2, ...);
 /* 1.start: The index at which the modification should begin.
 2.deleteCount: The number of elements to be removed from the array (optional).
 3.item1, item2, ...: Elements to be added to the array at the specified position (optional). */
 //Adding elements to an array:
 var numbers01= [1, 2, 3, 4];
numbers01.splice(2, 0, 5, 6);
console.log(numbers01); // Output: [1, 2, 5, 6, 3, 4]
//2.Removing elements from an array:
var fruits01 = ['apple', 'banana', 'orange', 'grape'];
var removedFruits01 = fruits01.splice(1, 2);
console.log(removedFruits01); // Output: ["banana", "orange"]
console.log(fruits01); // Output: ["apple", "grape"]
//3.Replacing elements in an array:
var colors = ['red', 'green', 'blue'];
var replacedColors = colors.splice(1, 1, 'yellow', 'purple');
console.log(replacedColors); // Output: ["green"]
console.log(colors); // Output: ["red", "yellow", "purple", "blue"]

/*slice()
In JavaScript, the slice() method is used to extract a
 portion of an array 
and return a new array containing the selected elements. 
 */
//array.slice(start, end);
//Extracting a portion of an array:
var numbers02 = [1, 2, 3, 4, 5];
var slicedNumbers = numbers02.slice(1, 4);
console.log(slicedNumbers); // Output: [2, 3, 4]
console.log(numbers02); // Output: [1, 2, 3, 4, 5]
//Extracting from a specific index to the end:
var fruits02 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
var slicedFruits = fruits02.slice(2);
console.log(slicedFruits); // Output: ["orange", "grape", "kiwi"]
console.log(fruits02); // Output: ["apple", "banana", "orange", "grape", "kiwi"]
//Extracting a portion of an array using negative indices:
var letters = ['a', 'b', 'c', 'd', 'e'];
var slicedLetters = letters.slice(-3, -1);
console.log(slicedLetters); // Output: ["c", "d"]
console.log(letters); // Output: ["a", "b", "c", "d", "e"]

/* map()
In JavaScript, the map() method is used to create a
 new array by applying a transformation function to
  each element of an existing array.
   It iterates over the elements of the array and
    calls the provided function for each element,
 generating a new value for each element. */
 //array.map(callback(currentValue, index, array));
/* 
1.callback: The function to be called for each element in the array.
 2.currentValue: The current element being processed in the array.
 3.index (optional): The index of the current element being processed.
 4.array (optional): The array on which the map() method was called.
 */
//1.Transforming an array of numbers:
const numbers03 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers03.map((number) => {
  return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log(numbers03); // Output: [1, 2, 3, 4, 5]
//2.Modifying an array of objects:
const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 19 }
  ];
  const studentNames = students.map((student) => {
    return student.name;
  });
  console.log(studentNames); // Output: ["Alice", "Bob", "Charlie"]
  console.log(students); // Output: [Object, Object, Object]
//3.Using concise arrow function syntax:
const numbers04 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers04.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers04); // Output: [1, 2, 3, 4, 5]

/* filter()
 In JavaScript, the filter() method is used to create a
  new array containing 
 elements from an existing array that meet certain criteria.*/
//array.filter(callback(element[, index[, array]])[, thisArg])

const numbers05 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers05.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

/* reduce
 In JavaScript, the reduce() method is 
 used to reduce an array to a single value 
 by executing a reducer function on each element of the array.*/
//array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
const numbers06 = [1, 2, 3, 4, 5,6];
const sum = numbers06.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum); // Output: 15

/* for...of 
In JavaScript, the for...of loop is used to iterate over
 iterable objects, including arrays, strings, maps, sets, and 
 more. It provides a simpler and more 
concise syntax compared to traditional for loops or forEach() */
/* 
for (variable of iterable) {
  // code to be executed for each iteration
}
*/
//1.Iterating over an Array:
const numbers07 = [1, 2, 3, 4, 5];

for (const number of numbers07) {
  console.log(number);
}
//2.Iterating over a String:
const message = "Hello";

for (const char of message) {
  console.log(char);
}
//Iterating over a Map:
const map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

for (const [key, value] of map) {
  console.log(key, value);
}
/* for...in
In JavaScript, the for...in 
loop is used to iterate over the properties of an object. */
/* 
for (variable in object) {
  // code to be executed for each property
}
*/
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
for (const key in person) {
  console.log(key + ': ' + person[key]);
}
//hasOwnProperty():
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ': ' + person[key]);
  }
}
/* forEach()
  forEach() that allows you to iterate over the elements of
   an array or the values of a map or set. It provides a 
   convenient way to perform an operation 
  on each element/value without the need for manual indexing.*/
//Iterating over an Array:
const numbers08= [1, 2, 3, 4, 5];

numbers08.forEach(function(number) {
  console.log(number);
});
//Iterating over a Map:
const map03 = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

map03.forEach(function(value, key) {
  console.log(key, value);
});
/*o/p
1 'one'
2 'two'
3 'three' 
 */
//Iterating over a Set:
const set = new Set([1, 2, 3, 4, 5]);
set.forEach(function(value) {
  console.log(value);
});

/*  jion

In JavaScript, the join() method is used to create
 a string by joining the elements of an array together
*/
//Joining an Array with Default Separator:
const fruits03 = ['apple', 'banana', 'orange'];
const result = fruits03.join();
console.log(result); // Output: "apple,banana,orange"
//Joining an Array with Custom Separator:
const colors01= ['red', 'green', 'blue'];
const result01 = colors.join('-');
console.log(result01); // Output: "red-green-blue"

/* shift()
In JavaScript, the shift() method is 
used to remove and return the first element from an array */
const fruits04= ['apple', 'banana', 'orange'];
const shiftedElement = fruits.shift();
console.log(shiftedElement); // Output: "apple"
console.log(fruits04); // Output: ["banana", "orange"]

//Here's an example with an empty array:
const emptyArray = [];
const shiftedElement01 = emptyArray.shift();
console.log(shiftedElement01); // Output: undefined
console.log(emptyArray); // Output: []

/* 
unshift()
In JavaScript, the unshift() method is used 
to add one or more elements to the beginning of an array.
*/
//array.unshift(element1[, element2, ..., elementN])
const fruits08 = ['banana', 'orange'];
fruits08.unshift('apple');
console.log(fruits08); // Output: ["apple", "banana", "orange"]

const numbers09 = [3, 4, 5];

numbers09.unshift(1, 2);

console.log(numbers09); // Output: [1, 2, 3, 4, 5]

/* delet()
In JavaScript, the delete operator is used to delete a 
property from an object or to remove an element from an array. 
*/
//Deleting a Property from an Object:
const person02= {
  name: 'John',
  age: 30,
  city: 'New York'
};
delete person02.age;
console.log(person02); // Output: {name: "John", city: "New York"}
//Deleting an Element from an Array:
const numbers10 = [1, 2, 3, 4, 5];
delete numbers10[2];
console.log(numbers10); // Output: [1, 2, undefined, 4, 5]

/* concat()

In JavaScript, the concat() method is used to merge two or
 more arrays or combine arrays with additional elements.  */
//array.concat(value1[, value2, ..., valueN])
//Concatenating Two Arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result02 = array1.concat(array2);
console.log(result02); // Output: [1, 2, 3, 4, 5, 6]
//Concatenating Array with Additional Values:
const array03 = [1, 2, 3];
const result03 = array03.concat(4, 5, 6);
console.log(result03); // Output: [1, 2, 3, 4, 5, 6]
//Combining Multiple Arrays:
const array01 = [1, 2];
const array02 = [3, 4];
const array05 = [5, 8];
const result04 = array01.concat(array02, array05);
console.log(result04); // Output: [1, 2, 3, 4, 5, 6]

/* reverse()
In JavaScript, the reverse() method is used
 to reverse the order of elements in an array
*/
const array08= [1, 2, 3, 4, 5];
array08.reverse();
console.log(array08); // Output: [5, 4, 3, 2, 1]
//** revers the string*/
const str = 'Hello, World!';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // Output: '!dlroW ,olleH'

/* Array.from()
In JavaScript, the Array.from() method is used to create 
a new array from an iterable object or an array-like object. 

Array.from(iterable[, mapFn[, thisArg]])
*/
//Converting a string to an array:
const str03= 'Hello';
const arr = Array.from(str03);
console.log(arr); // Output: ['H', 'e', 'l', 'l', 'o']
//Converting a Set to an array:
const set02= new Set([1, 2, 3]);
const arr02= Array.from(set02);
console.log(arr02); // Output: [1, 2, 3]
//Mapping function during conversion:
const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
const arr03 = Array.from(arrayLike, function(item) {
  return item.toUpperCase();
});
console.log(arr03); // Output: ['A', 'B', 'C']


