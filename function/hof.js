// Higher-order function that takes a function as an argument

/* In JavaScript, a higher-order function is a 
function that takes one or more functions as arguments and/or returns a function as its result. 
Simply put, it treats functions as values,
allowing them to be passed around and used dynamically in other functions.
 */
function greet(name, greetingFunction) {
    console.log(greetingFunction(name));
  }
  
  // Function that is passed as an argument to the higher-order function
  function sayHello(name) {
    return "Hello, " + name + "!";
  }
  
  // Function that is passed as an argument to the higher-order function
  function sayHola(name) {
    return "Hola, " + name + "!";
  }
  
  // Invoking the higher-order function with different functions as arguments
  greet("John", sayHello); // Output: Hello, John!
  greet("Maria", sayHola); // Output: Hola, Maria!
  
  function a(x,y){
    console.log(y(x))
  }
  function b(x){
    return "hi "+x+ " how are you"
  }
  function c(x){
    return "hello "+ x +" what are you"

  }
  a("jhon",b)
  a("maria",c)

  
  z=(t,r)=>{
    
    return t+r
 }
 console.log(z(2,4))