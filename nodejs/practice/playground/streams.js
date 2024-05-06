const fs = require('fs');

const readStream = fs.createReadStream('blog.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('newBlog.txt', { encoding: 'utf8' });

// Set up event listener for 'data' event on read stream
readStream.on('data', (chunk) => {
    console.log('new chunk');
    console.log(chunk);
    
    // Write chunk to the write stream
    writeStream.write('fefw f' );
    writeStream.write(chunk);
});

// Set up event listener for 'end' event on read stream
readStream.on('end', () => {
    console.log('Finished reading the file.');
    // Close the write stream after all data has been written
    writeStream.end();
});

// Set up error handling
readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

writeStream.on('error', (err) => {
    console.error('Error writing to file:', err);
});
