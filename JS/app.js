const notesArray = [
    {title: "note one", body:"this is a note"},
    {title: "note two", body:"this is the second note"},
    {title: "note three", body:"this is the third note"}
]
const theme = 'dark'
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

window.addEventListener('load', createNoteList(notesArray))

function noteListTemplate(title){
    html = '<li>$title</li>'
    return html
}

function createNoteList(arr){
    const noteDiv = document.querySelector("#notes-list")
    for (const note of arr){
        noteDiv.insertAdjacentElement('beforeend', noteListTemplate(note.title))
    }
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}

function toggleTheme(){
    if(localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light')
    } else {
        setTheme('theme-dark')
    }
}

(function(){
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-dark')
    } else {
        setTheme('theme-light')
    }
})()
