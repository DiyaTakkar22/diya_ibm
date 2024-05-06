const http = require('http');

//creating a server
const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url, req.method);
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("hello! coders");
    // res.end();


    //returning html pages  as a response when we make a request
    const fs = require('fs');
    res.setHeader('Content-Type', 'text/html');
    
    //routing
    let path='/nodejs/practice/playground/'
    switch(req.url)
    {
        case '/':
            path+='index.html';

            break;

        case '/about':
              path+='about.html';
              break;
        default:
               path+='404.html';
               break;

    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.write(data);
            res.end();
        }

    })

})  

server.listen(3000, 'localhost', () => {
    console.log('server has started on port');
})


//making requests
let options = {
    host: 'www.geeksforgeeks.org',
    path: '/courses',
    method: 'GET'
};
const request = http.request(options, (response) => {
    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
}).end();








