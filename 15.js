// javascript asyc/await

// we use the async keybord with a function to represent that the function is an asychronous function. the async function return a promise.

{
    // async function fun_name(parameter1,parameter2,.....parameterN,){
     // statement
     //  }
   
      // fun_name - name of the function 
      // parameters - parameters that are passed to the function 
 }
 
 // async
 
 // the async keyword is used before the function to represent that the function is asynchronous.
 
 {
     // async function example 
 
 //      async  function f() {
 //         console.log('async function called ');
 //         return Promise.resolve(1);
 //     }
  
 //    f();
 
 }
 
 // this funtion return a promise, you can use the chaining method then()
 
 {
    //   async function f(){
    //       console.log('async function.');
    //       return Promise.resolve("good morning");
    //       return Promise.reject("reject promise .");
    //   }
 
    //      f().then(function(result){
    //           console.log(result)
    //       }).catch((err)=>console.log(err));
     
 }
 
 // javacript await keybord
 
 // the await keybord is used inside the async function to await for the asynchronous operation.
 
 // the syntax to use await is
 
 {
      // let result = await promise;
 }
 
 // the use of await pauses the async function untill the promise return a result (resolve or reject) value.
 
 {
     //  a promise
     //  let promise = new promise(function (resolve, reject){
     //     detTimeout(function (){
     //         resolve('promise resolveed')}, 4000);
     //  })
 
 //     async function
 //     async function asyncFunc(){
 
 //         wait untill the promise resolves
 //         let result = await promise;
 
 //         console.log(result);
 //         console.log('hello');
 //    }
 
 //  calling the async function
 //  asyncFunc();
 }
   
 // a promise object is created and it gets resolved after 4000 milliseconds. here, the asyncFunc() function is  writing using the async function.
 
 // the await keyword waits for the promise to be complete (resolve or reject).
 
 // hello is displayed only after promise value is available to the result variable.
 
 // in the above program, if there are multiple peomise in the program.
 
 {
//     let promise1 = new Promise(function(resolve, reject){
//         setTimeout(function (){
//             resolve('promise 1 resolved')
//         },2000);
//     });

//     let promise2 = new Promise(function (resolve, reject){
//         setTimeout(function () {
//             resolve('promise 2 resolve')
//         },3000);
//     });

//     let promise3 = new Promise(function (resolve, reject){
//         setTimeout(function (){
//             resolve('promise 3 resolved')
//         },4000);
//     });

//   async function asyncFunc() {

//     let result1 = await promise1;
//     console.log (result1);

//     let result2 = await promise2;
//     console.log (result2);

//     let result3 = await promise3;
//     console.log (result3);
// }

//  asyncFunc();
}
 
 // benefits of using async function 

 // the code is more readable tahn using a callback or a promise.
 // error handling is simpler.
 // Debugging is easier.
 