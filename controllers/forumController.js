const Forum=require('../models/forum');


module.exports = {
    addForum : function (req,res){
        
        const forum=new Forum(req.body);
        forum.save().then(data=>{
            res.send({message:"le forum est crée"});
        }).catch(err=>{
            res.status(500).send({
                message:err.message || "Erreur dans la création du forum."
            })
        })
       
    },
    getAllForum: (req,res) => {
        
            Forum.find().then(forums=>{
                res.send(forums);
            }).catch(err => {
                res.status(500).send({
                    message:err.message || " Probleme dans le serveur "
                })
            })
    },

    getForum : function (req,res) {
            Forum.findById(req.params.forumId).then(forum=>{
                res.send(forum);
            }).catch(err=>{
                res.status(500).send({
                    message: err.message || "Probleme dans le serveur"}
            )
            })

        
    },

    modifyForum : function (req, res) {
        Forum.findByIdAndUpdate(req.params.forumId,req.body,{upsert:true,new:true},(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data);
        })

    },
    removeForum : function (req,res) {
       
        Forum.findByIdAndDelete(req.params.forumId,req.body,(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data)
        })

    }
}
