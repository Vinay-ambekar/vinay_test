document.write("hello")
const sum=(a,b,c)=> {
    console.log("yes i am running " +(a+b+c))
    }
    setTimeout(sum,1000,1,2,9)//after  only one second it will show the out put console.log() and add 1 ,2 and 9 and show 12

//setInterval(function(){
  //  alert("setinterval")
//},3000)//after every 3 second it shows the alert message continuosly 



let a=setTimeout(function(){
   alert("i am inside of settimeout")
},10000)//it show the alert message in small box afer 5 seconds

let b=prompt("do you want to run the settimout?")
if("n"== b){
   clearTimeout(a)//stop the above timer excution 
}


console.log(a)


 