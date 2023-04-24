let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
            alert("hey i am resolved")
            resolve(1)
},2000)
})

p1.then(()=>{console.log("Congratulation 1")})
p1.then(()=>{console.log("Congratulation 2")})
p1.then(()=>{console.log("Congratulation 3")})
p1.then(()=>{console.log("Congratulation 4")})
p1.then(()=>{console.log("Congratulation 5")})
p1.then(()=>{alert("Congratulation 6")})
p1.then(()=>{console.log("Congratulation 7")})
p1.then(()=>{console.log("Congratulation 8")})
p1.then(()=>{console.log("Congratulation 9")})
p1.then(()=>{console.log("Congratulation 10")})
p1.then(()=>{console.log("Congratulation 11")})
p1.then(()=>{console.log("Congratulation 12")})