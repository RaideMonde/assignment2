const notesArray = [
    {title: "note one", body:"this is a note"},
    {title: "note two", body:"this is the second note"},
    {title: "note three", body:"this is the third note"}
]


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

const noteList = document.querySelector('#notes-list')

function noteListTemplate(title){
    html = `
    <li>
        ${title}
    </li>
    `
    return html
}

function createNoteList(arr){
    const noteDiv = document.querySelector("#notes-list")
    for (const note of arr){
        noteDiv.insertAdjacentHTML('beforeend', noteListTemplate(note.title))
    }
}

function displayNote(title, arr){
    return note = arr.find(n => n.title == title)
}

function removeNote(){
    const note = document.querySelector('#note')
    note.remove()
}

function displayNoteTemplate(note) {
    const { title, body } = note
    return html = `
    <div id="note"> 
        <h2>${title}</h2>
        <p>${body}</p>
        <button onclick="removeNote()">close</button>
    </div>
    `
}

noteList.addEventListener('click', (e) =>{
    const noteDisplayArea = document.querySelector('#view-note')
    const title = e.target.textContent
    const note = displayNote(title, notesArray)
    noteDisplayArea.insertAdjacentHTML('beforeend', displayNoteTemplate(note))
})

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
