// Comparison:
// spring-maven   node-npm
// pom.xml = package.json
// maven update = npm install
// run project = npm start
// project = package
// mavenrepository.com = npmjs.com

import express from 'express'; // Importing the Express framework for Node.js to handle HTTP requests and responses.
import axios from 'axios'; // Importing Axios, a promise-based HTTP client for the browser and Node.js.

//const app=require('express'); // This is a commented-out line that is not being used.

const app = express(); // Creating an instance of the Express application.
const port = 3000; // Setting the port number for the server to listen on.
const url="https://jsonplaceholder.typicode.com/users/2"; // Setting a URL to fetch data from.
const args=process.argv.slice(0); // Getting command-line arguments.
const portN=args.find(arg=>arg.startsWith('port=')); // Finding the port argument in the command-line arguments.

if(portN){
    port=portN.split('=').at(1); // If a port argument is provided, update the port variable.
}

app.listen(port, () => { // Starting the Express app to listen for incoming connections on the specified port.
    console.log(`App started on http://localhost:${port}`, port); // Logging a message to the console when the server starts.
});

app.get('/', (request, response) => { // Handling GET requests to the root URL.
    axios.get(url) // Making a GET request to the specified URL using Axios.
     .then((res)=>{ // Handling the response from the GET request.
        console.log(""); // Logging an empty line to the console.
        response.send(res.username); // Sending the username from the response as the HTTP response.
         })
        .catch(err=>console.log(err)) // Handling errors if the GET request fails.
           
    console.log("GET /"); // Logging a message to the console.
    response.send('Hello World!'); // Sending "Hello World!" as the HTTP response.
});

app.get('/contact', (request, response) => { // Handling GET requests to the '/contact' URL.
    console.log("GET /contact"); // Logging a message to the console.
    response.send("Please contact us"); // Sending "Please contact us" as the HTTP response.
});

app.get('/about', (request, response) => { // Handling GET requests to the '/about' URL.
    console.log("GET /about"); // Logging a message to the console.
    response.send("About us"); // Sending "About us" as the HTTP response.
});

app.get('/stuff', (request,response)=>{ // Handling GET requests to the '/stuff' URL.
    response.send("stuff"); // Sending "stuff" as the HTTP response.
});

