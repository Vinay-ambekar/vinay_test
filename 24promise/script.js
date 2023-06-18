let a=new Promise((resolve,reject)=>{
resolve('a resolved ')
//reject(1)
})
 let b=new Promise((resolve,reject)=>{
    //resolve('1')
    reject(2)
    })

a.then(function(data){
    console.log("a resovle=>",data)
}).catch((err)=>console.log("a reject=>",err)
)

b.then(function(data){
    console.log("b resovle=>",data)
}).catch((err)=>console.log(" b reject=>",err)
)

