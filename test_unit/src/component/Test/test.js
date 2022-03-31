
//variable scoping
let a =10;

function outer(){
    let b = 20;
    function inner(){
        let c =30;
        console.log( a, b, c);
    }
    inner();
}
outer();

//example 2


function outer2(){
    let counter = 0
    function inner2(){
        counter ++;
        console.log( counter);
    }
    inner2();
}
outer2();
outer2();

//Closure in Javascript
// function outer3(){
//     let counter = 0
//     function inner3(){
//         counter ++;
//         console.log( counter);
//     }
//     return inner3();
// }

// const value = outer3();
// value();
// value();

function sum (a,z, b,c){
    return a + b + c + z;
}
//Currying
const curry = fn => (a, z)=>b => c =>{
    return fn(a,z, b,c);
}

//Same as
// function curry(fn){
//     return function(a){
//         return function(b){
//             return function (c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }
const curriedFunct = curry(sum)
console.log(curriedFunct(2, 1)(3)(5))
console.log(sum(2,3,6, 1))
const val1 = curriedFunct(2,4);
const val2 = val1(3);
const val3 = val2(5);
console.log("Curried Function with multiple calls", val3)