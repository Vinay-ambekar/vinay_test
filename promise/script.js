let a=new Promise((resolve,reject)=>{
//resolve('1')
reject(1)
})
 

a.then(function(data){
    console.log("resovle=>",data)
}).catch((err)=>console.log("reject=>",err)
).fullfil()



