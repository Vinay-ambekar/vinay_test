/*promise chiaining  explation
Sure! Imagine you want to order a pizza, but you need to follow a series of steps to get it. You start by calling the pizza place and placing your order. 
The person taking your order tells you they need to check if they have all the ingredients, and they'll call you back. You're now waiting for a callback from the pizza place.

While you're waiting for the callback, you decide to do some other tasks, like watching TV or reading a book. Once the pizza place calls you back to confirm they have all the ingredients, 
you provide your payment information. They then tell you that your pizza will be ready for pickup in 20 minutes. You hang up the phone and continue with your other tasks.

After 20 minutes, you go back to the pizza place, and they hand you your freshly baked pizza. You take it home and enjoy your meal.

In this example, the series of steps you took to order the pizza is similar to a promise chain. You made a request (placing an order) and received a promise (callback from the pizza place). 
While you were waiting for the promise to be fulfilled (confirmation of ingredients), you were able to continue with other tasks (watching TV or reading a book). Once the promise was fulfilled (confirmation of ingredients),
 you were able to chain another step (providing payment information) and receive another promise (pickup time). Finally, when the last promise was fulfilled (pizza ready for pickup), you were able to complete the chain and enjoy your pizza.
  Each step in the promise chain depended on the previous step being fulfilled before moving on to the next step,
 just like how promises in programming are chained together to handle asynchronous operations.

 promise difinition
 A promise chain is a series of connected promises in JavaScript or other programming languages,
 where each promise represents the result of an asynchronous operation, 
 and the chain allows for sequential execution of these operations in a structured manner.
 Each promise in the chain depends on the fulfillment or rejection of the previous promise, 
 allowing for organized handling of asynchronous tasks, such as API calls or database operations,
 in a clear and efficient way.
*/
//nested promise
/* const a = (x, y) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x * y);
      }, 2000);
    });
  };
  
  a(1, 5)
    .then((mul) => {
      console.log(mul);
      return a(mul, 5).then((mul1) => {
        console.log(mul1);
        return a(mul1, 5).then((mul2) => {
          console.log("end of nested promis=>"+ mul2);
          return a(mul2,5)
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
   */

//promise chaining do to avoid nested promise
console.log("start")
const b=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },5000)
})
.then((result)=>{

    console.log("\n\nstart of chanin pormise =>"+ result)
    return result*4
})
.then((result)=>{
    console.log(result)
    return result*4
})
.then((result)=>{
    console.log(result)
    return result*4
})
.then((result)=>{
    console.log(reult)
    return result*4
})
.then((result)=>{
    console.log(result)
    return result*4
})
 .catch(err=>{
    console.log("error occur=> " + err)
}) 
console.log("end") 

/* Promise.all([a(),b]).then((values)=>{
    console.log(values)
}) */                                                                                                                      