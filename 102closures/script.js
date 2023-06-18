/* function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();//try to find 'a'  in y but it can not, from lecsical scope of java script go to parent of y and find a 
}
x(); */
//clouser is combination function dundled to gether wiht  its 'lexical envornment' and forms a clouser


/* 
function x(){
    var a=7
    function y(){
        console.log(a)
    }
    return y;
}
var z=x()
console.log(z)//--->it print function y(){console.log(a)}
z()//-->print '7' */


function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(b,a)
        }
        y()
    }
    x()
}
z()
/* 
uses of Closures
->Module Design pattern
->Currying
->Function Like once
->memoize
->maintaining state in async world
->setTimeouts
->Iterators etc.,
*/