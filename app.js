//

// Ejs Module

import express from "express";

const app= express();

// Config ejs
app.set("view engine","ejs");
app.set('views','views'); // Normally it is by-Default but we are setting either way

// ejs is not only used for rendering html pages but also for passing dynamic data too

// here we are rendering html page 
// app.get('/',(req,res)=>{
//     res.render('index');
// });

// if we are fetching some data from data base we can pass it into the view 
// we are not using anydata base now but we will be looking how can we pass data to view 
app.get('/',(req,res)=>{
    res.render('index',{
        title :"title from Dynamic Ejs title",
        message:"Dynamic message from Ejs Module",
        people:["ilyas","farhan","hamza","usama"]
    });
});


app.listen(8000,()=>console.log("Server started"));