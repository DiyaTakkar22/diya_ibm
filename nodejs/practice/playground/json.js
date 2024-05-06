// const book={
//     title:'ego is the enemy',
//     author:'ryan holiday'
// }

// const bookJson=JSON.stringify(book);
// console.log(bookJson);

// const parsedData=JSON.parse(bookJson);
// console.log(parsedData.author);

const fs=require('fs');
// fs.writeFileSync('json.json',bookJson);

const dataBuffer=fs.readFileSync('json.json');
const dataJson=dataBuffer.toString();
const data=JSON.parse(dataJson)
console.log(data.title);