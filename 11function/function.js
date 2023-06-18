/*function difinition
In JavaScript, a function is a reusable block of code that can be defined using the 'function'
 keyword followed by a name,
 a list of parameters enclosed in parentheses, a block of code enclosed in curly braces

*/

//function statemnt or function declartion
function a(){
    console.log("\na called");
}
a();
//function expression
var b=function(){
 console.log("\nb called ");
}
b();
//Anonymous function -->function without a name is called anonymous function
//Anonymous functtion-->it gives error a function should have name other wise it give an error
//  function (){

//  }
//Anonymous function can used as vlaues means anonymous function can assign it to variables ex:->
let d=function(){
    console.log("\nhello");
}
d();

//named function expression
let c=function xyz(){   //named function expression
    console.log("\n\nxyz can get here because it is inside the function scope --> " + xyz)
}
c()
//xyz()//throug error out of the socpe

//difference b/w parameter and arguments
var e=function(parm1,parm2){//parm1 parm2 is called as parameters

}
e(1,2)//inside e 1 and 2 are called as arguments

/*first class function or first class citizen:->
A function can be passed as an argument to other functions,
can be returned by another function and can be assigned as a value to a variable.*/
//first class function ex 1:/n

var x=function(parm1){
    console.log(parm1)

}

x("\n\nthis is the out put of first class function x :-->" + function(){

})
//ex 2 for first class function:
var m=function(parm6){
    console.log(parm6)
}
function t(){

}

m(t)//function inside a function 


//ex3
var b= function (param3){
    return function(){

    }

}
console.log(b())//return anonymous function

//arrow function
g=()=>{
    console.log("\n\nhi i am arrow function, let const and  arrow function are intraduced in es6 2015 that is \n ecmascript")
}
g() 

//first class function 
function first(parm1){
    parm1()//call back function
    }
    first(function d(){
     console.log("hello")
    })
    
    var second=function (parm2){
        parm2()
    }
    let second01=function(){
        console.log("how are you")
    }
    second(second01)
     
    var thiree=function(parm3){
        return function(){
            console.log("i am worry")
        }
    }
    