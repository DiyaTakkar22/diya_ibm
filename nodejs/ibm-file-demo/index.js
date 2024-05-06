

import fs from 'fs';

const dataFile = 'emp.json';
const inputFile = 'input.txt';

// Read file
fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:");
        return console.error(err);
    }
   
    console.log("File content (emp.json):",JSON.stringify(data));
  
});


const content='diya';
fs.writeFile('input.txt', content, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!",content);
    console.log("Let's read newly written data");
});


fs.readFile(inputFile, function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

const contenToWrite={
    "eid": 102,
    "firstName": "Dohny",
    "lastName": "Doey",
    "position": "Software Engineer",
    "department": "Engineering",
    "salary": 85000
}


const jsonString=JSON.stringify(contenToWrite);

fs.writeFile(dataFile, jsonString, 'utf8',function (err) {
    if (err) {
        return console.error(err);
    }
    else{
       ;
        console.log("Data written successfully!",contenToWrite);
        console.log("Let's read newly written data");
    }

    
});



  
var data = "\nLearn Node.js";
  
// Append data to file
fs.appendFileSync('input.txt', data, 'utf8');
console.log("Data is appended to file successfully.");