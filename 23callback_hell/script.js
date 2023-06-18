let first=document.querySelector(".first")
let second=document.querySelector(".second")
let third=document.querySelector(".third")

let btn=document.querySelector(".btn")



btn.addEventListener('click',function(){
    setTimeout(() => {
        first.style.color='red'
        setTimeout(() => {
            second.style.color='green'
            setTimeout(() => {
                third.style.color='yellow'
            },3000);
        },8000);
    },2000);

}
    
    
)

console.log("star")
setTimeout(function(){
    console.log("hello 01")
    setTimeout(function(){
        console.log(("hello02"))
        setTimeout(function(){
            console.log("hwllo3")
            setTimeout(function(){
                console.log("hello 04")
                setTimeout(()=>{
                    console.log("hello 05")
                },3000)
            },1000)
        },5000)
    },3000)
},2000)
console.log("end")