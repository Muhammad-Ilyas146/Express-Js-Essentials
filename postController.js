// ------------- Controlers

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
  

// We are adding description and route for each 

// @desc Gets all the posts
// @route GET /api/posts

export const getPosts= (req,res)=>{
    const limit =parseInt(req.query.limit);

    if (!isNaN(limit) && limit> 0) {
        res.json(posts.slice(0,limit));
        
    } else {
        res.json(posts);
        
    }
};


// @desc Get  single post by id 
// @route GET /api/posts/:id

export const getPost = (req,res,next)=>{
    const id =parseInt(req.params.id);
    const post = posts.find((post)=>post.id ===id);
    if (!post) {
        // now we are using custom error handler  also we are adding next as parameter
        const error = new Error(`Post with the id : ${id} was not found`);
        // res.status(404).json({msg:`Post with the id : ${id} was not found`}); // due to custom error handler we are ignoring it 
        error.status =404;
        return next(error.message);
    
    } 
    res.status(200).json(post);
    
};

// @desc create new Post
// @route  POST /api/posts

export const createPost= (req,res)=>{
    const newPost={
        id:posts.length+1,
        title:req.body.title,
    };
    if (!newPost.title){
        return res.status(400).json({msg: " Please include some title"});
    }
    posts.unshift(newPost);
    res.status(200).json(posts);
};

// @desc Update  Post
// @route  PUT /api/posts/:id


export const updatePost=(req,res)=>{
    const id= parseInt(req.params.id);
    const post= posts.find((post)=> post.id===id);
    
    if (!post){
        return res.status(400).json({msg:`post with id ${id} Not found `});
    }

    // updating title
    post.title = req.body.title;
    res.status(200).json(post);

};


// @desc Delete   Post
// @route  DELETE  /api/posts/:id

export const deletePost=(req,res)=>{
    const id= parseInt(req.params.id);
    const post= posts.find((post)=> post.id===id);
    
    if (!post){
        return res.status(400).json({msg:`post with id ${id} Not found `});
    }

    // delete  the (filter will retrun all the posts except the id we are going to delete)
    posts = posts.filter((post)=> post.id!==id);

    res.status(200).json(posts);

};