//for loop
console.log('for loop')
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

//for in loop
console.log('for in loop')
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
  /* The for-in loop is useful when you need to perform operations on each property of an object,
 such as accessing or manipulating its values dynamically */

 //for of loop
 console.log('for of loop')
 const fruits = ['apple', 'banana', 'orange'];
 
for (let fruit of fruits) {
  console.log(fruit);
}

const person01= {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (let [key, value] of Object.entries(person01)) {
    console.log(key + ': ' + value);
  }
  
/* The for-of loop simplifies the process of iterating over iterable objects,
 as you don't need to manage an index or access elements using indexing */

 //while loop
 let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
/* That's a basic explanation of the while loop in JavaScript. 
It's a useful construct when you want to repeat a block of code until a certain condition is no longer true. */

//do while loop
do {
    // Code to be executed
  } while (condition);
 //example
 let number=8

do {
  number = prompt("Enter a number between 1 and 10:");
} while (number < 1 || number > 10);

console.log("Valid number entered:", number);

//how to stop the loop and continue the looop

//stop
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // Stops the loop when i is equal to 3
    }
    console.log(i);
  }
  
  //continue
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // Skips the current iteration when i is equal to 3
    }
    console.log(i);
  }
  