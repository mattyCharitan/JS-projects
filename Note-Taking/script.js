const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note => {
    const noteEl = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteEl, addNoteButton);
    
});

addNoteButton.addEventListener("click",()=> addNote() );
function getNotes(){
    return JSON.parse(localStorage.getItem("stickynotes-notes")|| "[]");
}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content){
const el = document.createElement("textarea");
el.classList.add("note");
el.value = content;
el.placeholder="Empty"

el.addEventListener("change", ()=>{
    updateNote(id, el.value);
})

el.addEventListener("dblclick", ()=>{
    const doDelete = confirm("Are you sure you wish to delete this note? ");
    if(doDelete){
        deleteNote(id,el);
    }
})

return el
}

function addNote(){
    const existingNotes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random()*10000),
        content:""
    };
    const noteElement = createNoteElement(noteObj.id, noteObj.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    existingNotes.push(noteObj);
    saveNotes(existingNotes);

}

function updateNote(id, newContent){
    const notes = getNotes();
    const taegetNotes = notes.filter(note => note.id == id)[0];
    taegetNotes.content = newContent;
    saveNotes(notes);

}

function deleteNote(id, element){
    const notes = getNotes().filter(note => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);

}