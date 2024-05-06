// 03-js-function-args.js

// const myFun = (arg) => {
//     let output = arg - 2;
//     console.log(output);
// };

// myFun('abc');


// const myFun = (arg) => {
//     let output = arg.city;
//     console.log(output);
// };

// myFun({abc: 'Bengaluru'});


// const myFun = (arg) => {
//     console.log('myFun invoked.');
//     let output = arg + 2;
//     console.log(output);
// };

// myFun(10);

// let num = 12;
// myFun(num);


// // main funciton 
//passing a function to a function
// const myFun = (arg) => {
//     console.log('myFun invoked.');
//     arg(); // function call 
// };

// // callback function 
// const anotherFun = () => {
//     console.log('anotherFun named invoked');
// };

// myFun(anotherFun);

// // myFun(() => { });

// myFun(() => {
//     console.log('another anonymous function invoked');
//  });


// const myFun = (arg) => {
//     console.log('myFun invoked.');
//     arg({city: 'Hyderabad'}); // function call 
// };

//object is passed
// myFun((abc) => {
//     console.log('another anonymous function invoked');
//     console.log(abc.city);
//  });


// setTimeout(args1, arg2);
// setTimeout(() => {}, 1000);

console.log('one');

setTimeout(() => {
    console.log('two');
}, 10000);

console.log('three');

