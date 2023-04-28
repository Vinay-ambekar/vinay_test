/* J.S can be used to send and return information from the network when needed (AJAX)
  'fetch API': is used to get data over the network
  let promise =fetch(url,[options]),without options a get request is sent
  */ 
let p=fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((value2)=>{console.log(value2) })
/* getting a response is a 2-stage process
1.an object of response class containing "status  and ok properties"
 2.after that we need to call another method to access the body in different formats
 
 "body method => resposn.tex(),respons.json(),respons.froamtadata() " we can use one body method */