/* function add(a,b,c){
    return a+b+c
}
let res=add(1,2,3)
console.log(res) */

/* function addtion(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
let res=addtion(2)
let data=res(4)
let data1=data(7)
console.log(data1)

//currying 
console.log(addtion(2)(3)(4)) */

userobj={
    name:"ajay",
    age:28
}
function userinfo(obj){
    return function(userinfo){
        return obj[userinfo]
    }
}
let res=userinfo(userobj);
console.log('name :'+res('name'))
console.log('age :'+res('age'))
