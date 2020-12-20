const Post=require('../models/post');


module.exports = {
    addPost : function (req,res){
        
        const post=new Post(req.body);
        post.save().then(data=>{
            res.send(post);
        }).catch(err=>{
            res.status(500).send({
                message:err.message 
            })
        })
       
    },
    getPosts: function(req,res)  {
        
            Post.find().then(posts=>{
                res.send(posts);
            }).catch(err => {
                res.status(500).send({
                    message:err.message 
                })
            })
    },

    getPostById : function (req,res)  {
            Post.findById(req.params.postId).then(post=>{
                res.send(post);
            }).catch(err=>{
                res.status(500).send({
                    message: err.message 
                }
            )
            })

        
    },
    getPostsByTheme : function (req,res) {
        Post.find({theme:req.params.themeId},(err,results)=>{
            if(err){
                res.status(400).send({message:"Erreur "});
            }
            else{
                res.status(200).send(results);
            }

        })},
        getPostsByUser : function (req,res) {
            Post.find({user:req.params.userId},(err,results)=>{
                if(err){
                    res.status(400).send({message:"Erreur "});
                }
                else{
                    res.status(200).send(results);
                }
    
            })},

    modifyPost : function (req, res)  {
        Post.findByIdAndUpdate(req.params.postId,req.body,{new:true},(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data);
        })

    },
    removePost : function (req,res) {
       
        Post.findByIdAndDelete(req.params.postId,req.body,(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data)
        })

    }
}
