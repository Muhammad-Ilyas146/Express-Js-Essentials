// server js for api or json data
// app js for template engines

const express = require("express");
const path=require('path');
// this object we will use for reuests/middleware etc
const app=express();

const PORT = process.env.PORT ||8080;
// Express Static middle ware

// setup Static folder 
// app.use(express.static(path.join(__dirname,"public")));

// // by doing this our index.html route will be set as "/" and to acces any of the other files we have to add their name and extension
// let posts = [
//     { id: 1, title: "Post One" },
//     { id: 2, title: "Post Two" },
//     { id: 3, title: "Post Three" },
//     { id: 4, title: "Post Four" },
//     { id: 5, title: "Post Five" },
//     { id: 6, title: "Post Six" },
//     { id: 7, title: "Post Seven" },
//     { id: 8, title: "Post Eight" },
//     { id: 9, title: "Post Nine" },
//     { id: 10, title: "Post Ten" }
//   ];
  
// // // get all posts 
// // app.get('/api/posts',(req,res)=>{
// //     // res.send(posts); // it will parse into json too 
// //     res.json(posts); // but it is more appropriate
// // })

// // setting limits using req.query query string Concepts

// app.get('/api/posts',(req,res)=>{
//     const limit =parseInt(req.query.limit);

//     if (!isNaN(limit) && limit> 0) {
//         res.json(posts.slice(0,limit));
        
//     } else {
//         res.json(posts);
        
//     }
   
// });

// // // get single  using req.params

// // app.get('/api/posts/:id',(req,res)=>{
// //     //  what ever that is passed in id to get that we use params
// //     // console.log(req.params);
    
// //     //get id  changing it str to integer
// //     const id =parseInt(req.params.id);
// //     // checking if that data exist we will return it 
// //     res.json(posts.filter((post)=> post.id ===id));
    
// // })

// // get single  using req.params and also setting the status codes

// app.get('/api/posts/:id',(req,res)=>{
//     const id =parseInt(req.params.id);
//     const post = posts.find((post)=>post.id ===id);
//     if (!post) {
//         res.status(404).json({msg:`Post with the id : ${id} was not found`});
//     } else {
//         res.status(200).json(post);
//     }

    
// })
app.listen(PORT,()=> console.log(`Server running on the PORT ${PORT} 🙌`));

