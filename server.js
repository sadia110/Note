const express = require("express"); 

const app = express(); 
const PORT = 3002;  

//look in the 'html' FIRST and serve any static file 
app.use(express.static('public'))

app.use(express.json()) // for parsing application 
app.use(express.urlencoded({extended:true})) 

let noteList = [ 
    {title:"first note placeholder text", text:"first note text", id:1000}
] //  to save notes to db
function saveNotes(){ 
    false.writeFileSync( fileName, Json.stringify( noteList))

} 

function loadNotes(){ 
    const loadNotes = fs.readFileSync (fileName, )

}

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

    res.send( newNote )
}) 

// to delete a note

app.delete( '/api/notes/:id', function( req, res ){ 
    const noteId = req.params.id
// to delete a note with filter * 
    noteList=noteList.filter( note=>note.id != noteId) 


    console.log( `[DELETE/api/notes]`, noteList) 
    res.send({id:noteId, message: "Note deleted", status: true})
})








// Listener 

app.listen (PORT, function () {
    console.log("App listening on POrt" + PORT); 

});  