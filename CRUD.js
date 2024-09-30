 // Here we will be doing the Routing stuff
 
 import express from 'express';
 const router = express.Router();

 
// by doing this our index.html route will be set as "/" and to acces any of the other files we have to add their name and extension
let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
    { id: 4, title: "Post Four" },
    { id: 5, title: "Post Five" },
    { id: 6, title: "Post Six" },
    { id: 7, title: "Post Seven" },
    { id: 8, title: "Post Eight" },
    { id: 9, title: "Post Nine" },
    { id: 10, title: "Post Ten" }
  ];
  


// setting limits using req.query query string Concepts

// As we are defining the /api/posts in endpoint/server.js  file we can get rid of them in the routes file
router.get('/',(req,res)=>{
    const limit =parseInt(req.query.limit);

    if (!isNaN(limit) && limit> 0) {
        res.json(posts.slice(0,limit));
        
    } else {
        res.json(posts);
        
    }
   
});



// get single  using req.params and also setting the status codes

router.get('/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    const post = posts.find((post)=>post.id ===id);
    if (!post) {
        res.status(404).json({msg:`Post with the id : ${id} was not found`});
    } else {
        res.status(200).json(post);
    }

    
});


// Create new post 

// router.post("/", (req,res)=>{
//     console.log(req.body);
//     res.status(201).json(posts);
// })


router.post("/", (req,res)=>{
    const newPost={
        id:posts.length+1,
        title:req.body.title,
    };
    if (!newPost.title){
        return res.status(400).json({msg: " Please include some title"});
    }
    posts.unshift(newPost);
    res.status(200).json(posts);
})


// Update or the put request 
router.put('/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const post= posts.find((post)=> post.id===id);
    
    if (!post){
        return res.status(400).json({msg:`post with id ${id} Not found `});
    }

    // updating title
    post.title = req.body.title;
    res.status(200).json(post);

});


// Delete Post 

router.delete('/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const post= posts.find((post)=> post.id===id);
    
    if (!post){
        return res.status(400).json({msg:`post with id ${id} Not found `});
    }

    // delete  the (filter will retrun all the posts except the id we are going to delete)
    posts = posts.filter((post)=> post.id!==id);

    res.status(200).json(posts);

});

export default router;


// we will be using ORMs
// we will be using Mangose for Mongo 
// and we will be using Sequelize for the SQL data bases
