/*definition of sync/await
The async function declaration declares an async function where the await keyword is permitted within the function body. 
The async and await keywords enable asynchronous,
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.
*/
async function harry() {
    let bangloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Bangalore weather is 27 deg");
      }, 4000);
    });
  
    let chitradurgaWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Chitradurga weather is 32 deg");
      }, 4000);
    });
    /* 
    the below given code .then() is to get resolve from promise but if bot are resolve at same time
    non of them are not going to wait to complete.means it is not going to complete one by one it will
    start at same time and who has a less time they will complete first and who has more time they will
    complete last.     
    bangloreweather.then((x)=>{alert(x)})
    chitradurgaeweather.then((x)=>{alert(x)}) */
 
    /* the below given code says that
    untill the bngw compete its asynchrons task it will not go to another asynchronsu opration,
    after the completion of bngw asnchrons task it will move to  another asynchronsu opration that is ctaw*/


    console.log("Fetching Bangalore Weather. Please wait....");
    let bngw = await bangloreWeather;
    console.log("Fetching Bangalore weather is => " + bngw);
    
    console.log("Fetching Chitradurga Weather. Please wait....");
    let ctaw = await chitradurgaWeather;
    console.log("Fetching Chitradurga weather is => " + ctaw);
    
    return [bngw, ctaw];
  }
  
  alert("Welcome to Weather Control Room");
  let a = harry();
  a.then((value) => {
    console.log(value);
  });
    
