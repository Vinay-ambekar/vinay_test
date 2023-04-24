let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },5000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2")
    },3000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },5000)
})
let p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject ("Error")
    },4000)
})
/* 
//after resolved all 3 it give an out put, if any one has a error it throug error out put
let promise_all=Promise.all([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
}) */
/* 
//p4 has error  and give output of p1,p2,p3,p4 and we can see the status and value 
let promise_all=Promise.allSettled([p1,p2,p3,p4])
promise_all.then((value)=>{
    console.log(value)
}) */

/* //p2 solved in 3secod  when compared to other three and one of them has error that is p4, if p4 solved first it through error in the console 
let promise_all=Promise.race([p1,p2,p3,p4])
promise_all.then((value)=>{
    console.log(value)
}) */

/* //it gives us output 6
let promise_all=Promise.resolve("resolve=> "+6)
promise_all.then((value)=>{
    console.log(value)
}) */

/* //it give i am error
let promise_all=Promise.reject("i am error")
promise_all.then((value)=>{
    console.log(value)
}) */

let promise_all=Promise.any([p1,p2,p3,p4])
promise_all.then((value)=>{
    console.log(value)
})