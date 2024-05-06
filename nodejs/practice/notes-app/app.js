
// const fs=require('fs');
// fs.writeFileSync('notes.txt','this file was created by nodejs');
// fs.appendFileSync('notes.txt',' i live in delhi');


// const name=require('./utils.js');
// console.log(name);


// const add=require('./utils.js');
// const sum=add(4,3);
// console.log(sum);


// const getNotes = require('./notes.js');
// const notes=getNotes();



const notes=require('./notes')
const chalk=require('chalk');
const greenMessage=chalk.blue.inverse.bold('success')
console.log(greenMessage);

const command=process.argv[2];

console.log(process.argv);

if(command=='add'){
    console.log('adding a note');
}
else if(command=='remove'){
    console.log('removing a note');
}

const yargs=require('yargs');
yargs.version('1.1.0');


//add, remove,read, list notes

//create add command
yargs.command({
    command:'add',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    describe:'add a new note',
    handler:function(argv){
        // console.log('title',argv.title);
        // console.log('body',argv.body);
         notes.addNote(argv.title, argv.body)

    }
})
// console.log(yargs.argv);

// creating a remove command
yargs.command({
    command:'remove',
    describe:'removing a note',
    handler:function(){
        console.log('removing a note');
    }
})

yargs.command({
    command:'list',
    describe:'listing a note',
    handler:function(){
        console.log('list a note');
    }
})
// console.log(yargs.argv);


yargs.command({
    command:'read',
    describe:'reading a note',
    handler:function(){
        console.log('readings a note');
    }
})
yargs.parse();
console.log(yargs.argv);