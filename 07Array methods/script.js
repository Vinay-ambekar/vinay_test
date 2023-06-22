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



