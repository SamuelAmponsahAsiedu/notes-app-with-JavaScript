const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');



//local storage vs session storage
// local storage helps us store data in the browser
// JSON: JavaScript 0bject Notation

showNotes();

function addNotes(){
    // const title = addTitle.value;
    // console.log(title);
    // const note = addText.value;
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notes =[]
    }else{
        notes = JSON.parse(notes)
    }

    if(addText.value == ''){
        alert('Add your note');
        return;
    }

    // console.log(note);

    const noteObj = {
        title: addTitle.value ,
        text: addText.value,
    }
    notes.push(noteObj)

    //updated v
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function showNotes(){
    let notesHTML = '';
    let notes =localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes =JSON.parse(notes);
    }

    for(let i=0; i<notes.length;  i++){
        console.log(notes[i])
        notesHTML += `<div class="note">
        <button class="deleteNote" id="${i} onclick={()}"> Delete </button>
        <div class="title">${notes[i].title} </div>
        <div class="text">${notes[i].text}</div>
        </div>`
    }

    notesDiv.innerHTML = notesHTML;

function deleteNote(ind){
    let notes =localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes =JSON.parse(notes);
    }

    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}



}

addNoteButton.addEventListener('click', addNotes);
