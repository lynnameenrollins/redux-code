export const myLogger2 = store => next => action=>{
    console.log("Inside second middleware ...");
    next(action);
}