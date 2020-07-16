const express = require("express"); 
const fs = require("fs")
const app = express();  
const port = process.env.PORT || 3000


//look in the 'html' FIRST and serve any static file 
app.use(express.static('public'))

app.use(express.json()) // for parsing application 
app.use(express.urlencoded({extended:true}))  

const fileName ='db/db.json'

let noteList = [ 
    {title:"first note placeholder text", text:"first note text", id:1000}
] //  to save notes to db
function saveNotes(){ 
    fs.writeFileSync( fileName, JSON.stringify( noteList))

} 
// to load notes 
function loadNotes(){ 
    const loadNotes = fs.readFileSync (fileName,'utf8' ) 
    return loadNotes 

} 

// let noteList = loadNotes()

// API routes  

app.get( '/api/notes', function( req, res ){ 
    console.log( `[GET/api/notes]`)  
    res.send(noteList )

}) 
// to post a note 
app.post( '/api/notes/', function( req, res ){  
    let newNote= req.body  
    // to give uniqe id 
    newNote.id= Date.now()
    console.log( `[POST/api/notes]`, newNote)  
    // to save note 
    noteList.push (newNote) 

    saveNotes()

    res.send( newNote )
}) 

// to delete a note

app.delete( '/api/notes/:id', function( req, res ){ 
    const noteId = req.params.id
// to delete a note with filter * 
    noteList=noteList.filter( note=>note.id != noteId)  

    saveNotes()


    console.log( `[DELETE/api/notes]`, noteList) 
    res.send({id:noteId, message: "Note deleted", status: true})
})








// Listener 

app.listen (PORT, function () {
    console.log("App listening on POrt" + PORT); 

});  
