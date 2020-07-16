const express = require("express"); 

const app = express(); 
const PORT = 3000;  

//look in the 'html' FIRST and serve any static file 
app.use(express.static('public'))

app.use(express.json()) // for parsing application 
app.use(express.urlencoded({extended:true})) 

// API routes 
app.get( '/api/notes', function( req, res ){ 
    console.log( `[GET/api/notes]`)
}) 

app.post( '/api/notes', function( req, res ){ 
    console.log( `[POST/api/notes]`)
})

app.delete( '/api/notes', function( req, res ){
    console.log( `[DELETE/api/notes]`)
})








// Listener 

app.listen (PORT, function () {
    console.log("App listening on POrt" + PORT); 

});  