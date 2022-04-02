
let a =10;
function outer(){
    let b=20;
    function inner(){
        let c=30;
        console.log(a,b,c);
    }
    inner();
}
outer();

//variable scoping

function outer2(){
    let counter =0;
    function inner(){
        ++counter;
        console.log(counter);
    }
    inner();
}
outer2();
outer2();

function outer3(){
    let counter =0;
    function inner3(){
        ++counter;
        console.log(counter);  //Closure
    }
    return inner3;
}
const val3 = outer3();
val3();
val3();

function sum(a,b,c,z){
    return a+b+c + z;
}

console.log(sum(2,3,5,7));

const curry = fn => (d,z) => e => f =>{
    return fn(d,e,f)
}
// function curry(fn){
//     return function(a,z){
//         return function (b){
//             return function (c){
//                 return fn(a,b,c,z)
//             }
//         }
//     }
// }
const curriedFunc = curry(sum);
console.log(curriedFunc(2,7)(6)(5));

const val1 = curriedFunc(2,4);
const val2 = val1(3);
const val5 = val2(3);

console.log(val5);