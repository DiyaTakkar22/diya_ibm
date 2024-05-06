console.log("bleh bleh");

let firstName = 'Sonu';
let message = 'hi' + firstName + '!How are you?';
//These backticks (`) are used to create a template literal in JavaScript.
// Template literals are string literals allowing embedded expressions.
let message2 = ` hi ${firstName}! How are you?`;
console.log(message);
console.log(message2);

//java: strongly typed language
//javascript:dynamically typed language

//java:
//int num=10;
//Employee emp=new Employee();

//javascript:
let num = 10;
// here num can accept any type of data.
console.log(num);
num = 'abc';
console.log(num);


//variable declaration
num = 10;//don't use
let num2 = 20;  //don't use
const num3 = 30;  //use this. it is like final keyword in java.
var num4 = 40; // when variables are to be created

//functions
const calGst = (exp) = {

};

//class
class Myclass {

}

//datatypes
const eid = 100;
const name = "tonu";
const salary = 10.5;
const isMarried = false;

let myValue = 50;
console.log(myValue);
console.log(typeof (myValue));
myValue = 20.25;
console.log(myValue);
console.log(typeof (myValue));
myValue = 'abc';
console.log(myValue);
console.log(typeof (myValue));
myValue = true;
console.log(myValue);
console.log(typeof (myValue));

//When non-boolean values are used in a boolean context, such as the condition of an if statement,
// they will be coerced into either true or false. 
//Values that are coerced into true are called truthy and values that are coerced into false are called falsy.
if ([]) {
    console.log("[] is truthy");
}

if ([] == false) {
    console.log("[] is loosely equal to false");
}

//NaN means the value is Not A Number.
//Null is a value which you can use when you yourself want assign a empty value to a variable.
//Undefined is a value which automatically gets assign to a variable when you yourself have not assigned anything to a variable

//Arrays
const myArray = [10, 20, 40];
const cars = new Array("Saab", "Volvo", "BMW");
const len = myArray.length;
console.log(len);
myArray.sort();

//objects 
const empData = {
    empid: 101,
    fName: "sonu",
    sal: 10.5,
    isIndian: true,
    address:{city:'pune',pin:22222},
    printData:function(){
        console.log(this);
    }

};

empData.printData();
console.log(empData.address.city);
