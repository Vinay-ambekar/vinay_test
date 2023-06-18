//youtube video link:-->https://youtu.be/Wdlu_wlj6as

/*differece between arrow function and normal function
1. Arguments objects are not available in arrow functions.
2. Regurlar functions created using function declarations or expressions are `constructible` and `callable`
3. Arrow functions adon not have theier own this.
4. implicitly returned by the arow fuction.*///suggested though not directly expressed.


/*//1. Arguments objects are not available in arrow functions.
//normal function
function add(x,y){
    console.log("to check how many arguments are there we use :--> ")
    console.log( arguments)
    return x+y
}
let a=add(2,3)
console.log(a)*/

/*//arrownfunction
const add=(x,y)=>{
    console.log(arguments)//throug error arguments is not defind
    return x+y
}
add(10,15)*/

//2. Regurlar functions created using function declarations or expressions are `constructible` and `callable`

/*//normal function
function car(name){
    this.brand=name
}
let carData=new car('maruti')
console.log(carData)*/

/*//arrow function
const car=(name)=>{
    this.brand=name;
}
let carData=new car('maruti')
console.log(carData)//through error : car is not a constructor(what is constructor)*/

//3. Arrow functions addon not have theier own this.
/*//normal function
let userInfo={
    name:'code improve',
    fullName(){
        console.log(this.name+' normal function')
    }
}
userInfo.fullName()*/
//Arrow function
/*let userInfo={
    name:'code improve',
    fullName(){
        const test=()=>{
            console.log(this.name+'=====')
        }
        test()
        console.log(this.name+' normal function')
    },
    fullName1:()=>{
        console.log(this.name+' normal function')//undefind normall function
    }
}
userInfo.fullName()
userInfo.fullName1()//undefind normall function*/

//4. implicitly returned by the arow fuction.
/*//normal function
function mask(){
    100;
}
console.log(mask())//undefind*/

/*//arrow function
const mask=()=>100
console.log("out put of mask is "+mask())*/