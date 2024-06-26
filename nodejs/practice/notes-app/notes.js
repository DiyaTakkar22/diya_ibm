
const fs = require('fs');

const getNotes = function () {
    return "your notes";
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes=notes.filter(function(note){
        return note.title===title;

    })
    if(duplicateNotes.length===0){
        console.log(notes);
        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes);
    }
    else{
     console.log("already taken")   
    }
    
}

const saveNotes=function(notes){
  const dataJson=JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJson)
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return []
       
    }
    
    return JSON.parse(dataJson);
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}