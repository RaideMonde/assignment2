
// This is where notes will go, stored as a note object, returns a note
const notesArray = []
// This is a note object, it contains a title and a body
const note = 
{
    title: "title",
    body: "body"
}

function defineNoteWritingSection(){
    html = `
    <div id="note-area">
        <div id="note" contenteditable="true"></div>
        <button onclick="saveNote()">save</button>
        <button onclick="cleanUp()">cancel</button>
    </div>
    `    
    return html
}

function createContentWritingArea() {
    const div = document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
}

function setCursor(){
    const div = document.querySelector('#note')
    div.focus()
}


// This should save and store the note and remove the note taking area
function saveNote(){
    const div = document.querySelector('#note')
    const title = div.firstChild.textContent
    const body = convertDivsToString()
    notesArray.push(createNote(title, body))
    console.log(notesArray)
    cleanUp()
}

function createNote(title, body){
    return{title, body}
}

function convertDivsToString(){
    let str = ""
    const divs = [...document.querySelectorAll('[contenteditable] > div:not(first-child)')]
    for(const i of divs){
        str += `${i.textContent}\n`
    }
    return str
}

function cleanUp(){
    const div = document.querySelector('#note-area')
    div.remove()
    
}

function defineCreateNoteSection(){
    html = `
    <div>
        <span onclick="createContentWritingArea()"> +Create a new note</span>
    </div>
    `
    return html
}


/*
This should be a function to add darkmode
ColorScheme {
    Checks Color scheme
    if light:
    switch to dark
    else: 
    switch to light
}
*/


/*
This should pop up the note section
NewNote {
    brings up the note area
    brings up save/cancel button
}
*/


/*
This should display notes
DisplayNotes {
    Loops through notes and prints out each heading
    decontstructs note
}
*/