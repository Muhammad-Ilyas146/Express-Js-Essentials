
// We are using common js to import these files 

// const express = require("express");
// const path=require('path');
// const posts =require('./posts/routes')

// now we are using es module for them 
import express from 'express';
import {  fileURLToPath } from "url";
import path from 'path';
import posts from './posts/routes.js';
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";


const PORT = process.env.PORT ||8080;
// this object we will use for reuests/middleware etc
const app=express();

// Getting directory name because now we are using ES module and it is not available here.(it is availabele in Common js)

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
// Express Static middle ware
console.log(path.join(__dirname,"public"))
// setup Static folder 
app.use(express.static(path.join(__dirname,"public")));

//  Body parser Middleware 
app.use(express.json());  //this will allow us to submit raw json
app.use(express.urlencoded({extended:false}));  // this will allow us to send the form data


// Routes basicaly it is middle ware 
app.use(errorHandler);
// logger middle ware 
app.use(logger);

// As we are defining the /api/posts in this file we can get rid of them in the routes file
app.use('/api/posts',posts);
app.listen(PORT,()=> console.log(`Server running on the PORT ${PORT} 🙌`));

