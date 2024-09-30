// server js for api or json data
// app js for template engines

const express = require("express");
const path=require('path');
// this object we will use for reuests/middleware etc
const app=express();


// we don't need to set headers as we used to do in http module like content types etc.
// plain text 
app.get("/",(req,res)=>{
    res.send('Hello From Ilyas Express learning');

});

// html 
app.get("/html",(req,res)=>{
    res.send('<h1>Hello From Ilyas Express learning</h1>');

});


// js object and it will parse automatically it into json object
app.get("/json",(req,res)=>{
    res.send({name:'ilyas'});

});


// how to send html files as response 

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
});

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"))
})

app.listen(8000,()=> console.log(`Server running on the PORT 8000 🙌`));

