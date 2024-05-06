//asynchronous/ non blocking
//multiple tasks can execute at the same time while tasks in the background finish. 


// const getMessage=()=>{
//     console.log('getMessage function called.');
//     setTimeout(()=>{
//         return {message:'have fun!'}
//     },1000);
// };

// const message=getMessage();
// console.log(message);

// solution 1: callback function
//arg represents a callback function that will be passed as an argument when getMessage1 is called.
const getMessage1=(arg)=>{
    console.log('getMessage function called.');
    setTimeout(()=>{
        arg({message:'have fun!'})  //is a function call
    },1000);
};

getMessage1((abc)=>{
    console.log(abc.message);
})

//getMessage1 is called with a callback function as its argument.
/// This callback function takes one argument abc and logs the message property of the object passed to it.

//The use of the arg parameter in the getMessage1 function allows for a flexible and asynchronous way to handle the result of an operation. 

//Asynchronous Behavior: By passing a callback function (arg in this case) to getMessage1, it allows the function to perform asynchronous operations (like the setTimeout in this example)
// and notify the caller when the operation is complete.
//Separation of Concerns: The getMessage1 function doesn't need to know or care about what should happen when the operation it initiates completes. It simply delegates that responsibility to the callback function provided by the caller.
//Flexibility: The caller of getMessage1 can decide what action to take when the asynchronous operation completes by providing a different callback function each time it calls getMessage1. This makes the function adaptable to various scenarios and use cases.

//solution 2: promise
//possibility 1: pending
//possibility2 : resolved
//possibility 3:rejected

const getMessage2=()=>{
   return new Promise((resolve,reject)=>{
    const isDataAvailable=true;
    setTimeout(()=>{
        if(isDataAvailable)
             resolve({message:'have fun!'});

        else
           reject({message:'data not available'});
   },2000)
   });
}

getMessage2().
  then((response)=>{console.log(response.message)})
  .catch((error)=>{console.log(error.message)});

  //the executor should perform a job (usually something that takes time) and then 
  //call resolve or reject to change the state of the corresponding promise object.
  //he first argument of .then is a function that runs when the promise is resolved and receives the result.
//The second argument of .then is a function that runs when the promise is rejected and receives the error.

//solution 3: async and await
//The word “async” before a function means one simple thing: a function always returns a promise

const prinData= async ()=>{
    try{
        const output=await getMessage2();
        console.log(output.message);
    }
   catch(error){
    console.log(error.message);
   }
}

//await literally suspends the function execution until the promise settles, and then resumes it with the promise result.

