 // Here we will be doing the Routing stuff
 
import express from 'express';
import { getPost,getPosts,createPost,updatePost,deletePost, } from "../controllers/postController.js";
const router = express.Router();

 
// by doing this our index.html route will be set as "/" and to acces any of the other files we have to add their name and extension


// // logger Middleware function for app level use we create loggers in separate file that we are going to do now;
// const logger= (req,res,next)=>{
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// };


// // setting limits using req.query query string Concepts

// // As we are defining the /api/posts in endpoint/server.js  file we can get rid of them in the routes file
// router.get('/',logger,(req,res)=>{
//     const limit =parseInt(req.query.limit);

//     if (!isNaN(limit) && limit> 0) {
//         res.json(posts.slice(0,limit));
        
//     } else {
//         res.json(posts);
        
//     }
   
// });



// As we are defining the /api/posts in endpoint/server.js  file we can get rid of them in the routes file
router.get('/',getPosts);
// get single  using req.params and also setting the status codes

// intead of calling the midlleware inside the arrow fucntion we will use it as parameter.
router.get('/:id',getPost);


// Create new post 

// router.post("/", (req,res)=>{
//     console.log(req.body);
//     res.status(201).json(posts);
// })


router.post("/", createPost)


// Update or the put request 
router.put('/:id',updatePost);


// Delete Post 

router.delete('/:id',deletePost);

export default router;