import { createServer } from 'http';
const server= createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.end(('<h1>Hello Diya</h1>'))
})
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}/`);
})

//We use the http module to create an HTTP server.
//The server listens on the specified port and hostname.
//When a new request arrives,
// the callback function handles it by setting the response status, headers, and content.

//assert module
// s a utility module commonly used for writing test cases and performing assertions.
// When you write code, especially in a test-driven development (TDD) environment, 
//assertions help ensure that your code behaves as expected.

//.strict property ensures strict mode behavior, which means that the assertions will strictly check for equality using the strict equality operator (===).
// This ensures that both the value and the type of the operands are the same.
const assert=require('assert').strict;

var a="diya1";
var b="diya2";

try{
    assert.strictEqual(a,b);
}
catch(error){
   console.log(error);
}

