// array exercieses 

// 1. Create a function that takes an array of objects representing employees 
// and returns the average / max / min salaries of all the employees
const empData = [
    {

        empid: 101,
        fName: "sonu",
        sal: 10.5,
        isIndian: true,
        address: { city: 'pune', pin: 22222 },
        printData: function () {
            console.log(this);


        }
    },
    {
        empid: 102,
        fName: "tonu",
        sal: 11.5,
        isIndian: false,
        address: { city: 'delhi', pin: 22245 },
        printData: function () {
            console.log(this);
        }
    },
    {
        empid: 103,
        fName: "ponu",
        sal: 12.5,
        isIndian: true,
        address: { city: 'nashik', pin: 22248 },
        printData: function () {
            console.log(this);
        }
    }
]
function employeesCalculate() {
    let totalSalary = 0;
    let minSalary = Number.MAX_VALUE;
    let maxSalary = Number.MIN_VALUE;

    empData.forEach(emp => {

        totalSalary += emp.sal;
        minSalary = Math.min(minSalary, emp.sal);
        maxSalary = Math.max(maxSalary, emp.sal);
    })

    const averageSalary = totalSalary / empData.length;

    return {
        averageSalary,
        minSalary,
        maxSalary
    };

}

const stats = employeesCalculate(empData);
console.log("Average Salary:", stats.averageSalary);
console.log("Minimum Salary:", stats.minSalary);
console.log("Maximum Salary:", stats.maxSalary);


// 2. Write a function that takes an array of objects
// and sorts them based on a specified property (e.g., salary or firstName)
const sortArray = (empData,property) => {
  return empData.sort((a,b)=>{
    if(a[property] < b[property]){
        return -1;
    }
    else if(a[property] > b[property]) {
        return 1;
    }
    else {
        return 0;
    }
  });
};
const sortedBySalary = sortArray(empData, "sal");
console.log("Sorted by salary:", sortedBySalary);

const sortedByName = sortArray(empData, "fName");
console.log("Sorted by salary:", sortedByName);

// 3. Write a function that takes a string and converts it to a number.
// Handle cases where the string cannot be converted to a number
// and return an error message.
const stringConversion = (string) =>{
   const num=parseInt(string);
   if(isNaN(num)){
    return "string could not be converted to a number";
   }
   return num;
}
const number=stringConversion("diya");
console.log(number);

// 4. Write a function that takes a string and
// and returns the number of vowels it contains.
const vowelsCount = (string) =>{
    vowels="aeiouAEIOU";
    let count=0;
    for(let char in string){
        if(vowels.includes(char)){
            count+=1
        }
         
    }
    return count;
}

countVowels=vowelsCount("ergjbehghjg");
console.log(countVowels);

// 5. Create a function that takes a string and
// reverses the order of words (not characters) in it.
function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(" ");
    
    // Reverse the order of words
    const reversedWords = words.reverse();
    
    // Join the words back together into a single string
    const reversedStr = reversedWords.join(" ");
    
    return reversedStr;
}

// Example usage:
console.log(reverseWords("Hello world")); // Output: "world Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"



// 6. Demonstrate your understanding of rest parameters and spread operators 
// Example of rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

const arr=[10,20,20,40];
const [a,b,c,d]=[...arr];
console.log(b);

const addNums=(...args)=>{
  args.reduce((sum,elem)=> sum+elem);
}

const sum1=addNums(1,2,3,4,5,6,7);
console.log(sum1);

// Example of spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

