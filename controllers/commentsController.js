const Comment=require('../models/comment');
const Post=require('../models/post');

module.exports = {
    addComment : function (req,res){
        
        console.log(req.body.message)
        const comment=new Comment(
            req.body
        );
        comment.save().then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send({
                message:err.message || "Erreur dans la création du comment."
            })
        })
       
    },
    getAllComment: (req,res) => {
            Comment.find().then(comments=>{
                res.send(comments)
            }).catch(err => {
                res.status(500).send({
                    message:err.message || " Probleme dans le serveur "
                })

            })
    },

    getCommentsByPost : function (req,res) {
        Comment.find({post:req.params.postId},(err,results)=>{
            if(err){
                res.status(400).send({message:"Erreur "});
            }
            else{
                res.status(200).send(results);
            }

        })


        
    },
    getComment : function (req,res) {
        Comment.findById(req.params.commentId).then(comment=>{
            res.send(comment);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || "Probleme dans le serveur"}
        )
        })

    
},
    getCommentsByUser : function (req,res) {
        Comment.find({user:req.params.userId},(err,results)=>{
            if(err){
                res.status(400).send({message:"Erreur "});
            }
            else{
                res.status(200).send(results);
            }

        })


        
    },


    modifyComment : function (req, res) {
        Comment.findByIdAndUpdate(req.params.postId,req.body,{upsert:true,new:true},(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data)
        })
        

    },
    removeComment : function (req,res) {
        Comment.findByIdAndDelete(req.params.commentId,req.body,(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json({message:"succes"})
        })

    }
}
