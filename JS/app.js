
// This is where notes will go, stored as a note object, returns a note
const notesArray = []
// This tracks the theme 
var theme = 'dark'
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

function displayNotes(){
    var result= ""
    notesArray.forEach(function (item){
        result += "<li>" + item.title
    })
    document.getElementById("notes").innerHTML = result
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

// function colorMode(){
//     if (theme == 'dark'){
//         document.documentElement.style.setProperty('--base', '#232136')
//         document.documentElement.style.setProperty('--surface', '#2a273f')
//         document.documentElement.style.setProperty('--overlay', '#393552')
//         document.documentElement.style.setProperty('--inactive', '#59546d')
//         document.documentElement.style.setProperty('--subtle', '#817c9c')
//         document.documentElement.style.setProperty('--text', '#e0def4')
//         document.documentElement.style.setProperty('--textarea', '#9ccfd8')
//         theme = 'light'
//     } else{
//         document.documentElement.style.setProperty('--base', '#232136')
//         document.documentElement.style.setProperty('--surface', '#2a273f')
//         document.documentElement.style.setProperty('--overlay', '#393552')
//         document.documentElement.style.setProperty('--inactive', '#59546d' )
//         document.documentElement.style.setProperty('--subtle', '#817c9c')
//         document.documentElement.style.setProperty('--text', '#e0def4')
//         document.documentElement.style.setProperty('--textarea', '#9ccfd8' )
//         theme = 'dark'
//     }
// }


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
