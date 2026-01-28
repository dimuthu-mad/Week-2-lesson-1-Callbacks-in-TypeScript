
//1) Hello Callback 

// type CallbackFunction = ()=> void;
// const callFunction = (callbackFunction: CallbackFunction)=>{
//     callbackFunction();
// }

// const callbackFunction= ()=>{
//   console.log("Hello from callback");  
// }

// callFunction(callbackFunction);

//2) Delayed Greeting 
// type CallbackFunction = ()=> void;

// const sayHelloLater =(callbackFunction: CallbackFunction)=>{
//     setTimeout(()=>{
// callbackFunction();
//     },2000)
// }

// const callbackFunction=()=>{
//     console.log("Hi, I am late!");
// }

// sayHelloLater(callbackFunction);

//3) Data Fetching Simulation

// type callbackFunction=(sum: any) => void
// const addNumber=(a:number,b:number,callBack:callbackFunction)=>{
//     const sum=a+b;
//     callBack(sum);
// }

// const callBack=(sum:number)=>{
//     console.log("The sum is:", sum);
// }

// addNumber(4,2,callBack);