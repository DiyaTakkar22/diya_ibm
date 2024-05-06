
// const EventEmitter = require('node:events');
// const eventEmitter = new EventEmitter();

// //emit is used to trigger an event
// //on is used to add a callback function that's going to be executed when the event is triggered
// eventEmitter.on('start',()=>{
//   console.log("started");
// })

// eventEmitter.emit();

import {EventEmitter} from 'events';
import { readFile } from 'fs';

//filesearch is an event emitter
class FileSearch extends EventEmitter{
    constructor(pattern){
        this.pattern=pattern;
        this.files=[]; //initializing the files into an empty array
    }

    addFile(file){
        this.files.push(file);
        return this; // allows you to chain functions  
    }
}