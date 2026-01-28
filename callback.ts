
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

//4) Uppercase Callback

// type upperCaseCallbackFunction=(uppercaseText: any) => void;
// const upperCase=(text:string,upperCaseCallback:upperCaseCallbackFunction)=>{
// const uppercaseText=text.toUpperCase();
// upperCaseCallback(uppercaseText);
// }

// const upperCaseCallback=(uppercaseText:string)=>{
//     console.log(uppercaseText);
// }

// upperCase("Learn Callbacks",upperCaseCallback);

//5) Pizza Order
// type pizzaReadyCallbackFunction=(text: string) => void
// const orderPizza=(pizzaReadyCallback:pizzaReadyCallbackFunction)=>{
//     pizzaReadyCallback("Your pizza is ready!");
// }

// const pizzaReadyCallback=(text:string)=>{
//     console.log(text);
// }

// orderPizza(pizzaReadyCallback);


//6) Multiple Messages
// type multipleCallbacksFunction=(text: string) => void;
// const multipleMessage = (multipleCallbacks: multipleCallbacksFunction) => {
//     for (let i = 1; i <= 3; i++) {
//         multipleCallbacks('Message ' + i);
//     }
// }

// const multipleCallbacks = (text:string) =>{
//     console.log(text);
// }

// multipleMessage(multipleCallbacks);


//7) Download Simulation

const downloadFile = (url: string, downloadCallback: (status: string) => void) => {
    const text= `Downloaded data from ${url}...`;
    setTimeout(() => {
        downloadCallback(text);
    }, 2000);
}

const downloadCallback = (status: string) => {
    console.log(status);
}   

downloadFile("http://exampleDownload.com/file", downloadCallback);