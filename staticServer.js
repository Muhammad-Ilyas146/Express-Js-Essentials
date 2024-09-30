// server js for api or json data
// app js for template engines

const express = require("express");
const path=require('path');
// this object we will use for reuests/middleware etc
const app=express();

// Express Static middle ware

// setup Static folder 
app.use(express.static(path.join(__dirname,"public")));

// by doing this our index.html route will be set as "/" and to acces any of the other files we have to add their name and extension

app.listen(8000,()=> console.log(`Server running on the PORT 8000 🙌`));

