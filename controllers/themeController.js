

const Theme= require('../models/theme');


module.exports = {
    addTheme : function(req,res){
        const theme=new Theme(req.body);
        theme.save().then(data=>{
            res.status(200).send({message:"le theme est crée"});
        }).catch(err=>{
            res.status(500).send({
                message:err.message || "Erreur dans la création du theme."
            });
        })
       
    },
    getAllThemes: function (req,res)  {
        
            Theme.find().then(themes=>{
                res.send(themes);
            }).catch(err => {
                res.status(500).send({
                    message:err.message || " Probleme dans le serveur "
                })
            })
    },

    getTheme : function (req,res) {
            Theme.findById(req.params.themeId).then(theme=>{
                res.send(theme);
            }).catch(err=>{
                res.status(500).send({
                    message: err.message || "Probleme dans le serveur"}
            )
            })

        
    },
    getThemesByForumId : function (req,res){
        Theme.find({forum:req.params.forumId},(err,results)=>{
            if(err){
                res.status(400).send({message:"Erreur "});
            }
            else{
                res.status(200).send(results);
            }

        })
    },

    modifyTheme : function (req, res) {
        Theme.findByIdAndUpdate(req.params.themeId,req.body,{upsert:true,new:true},(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data)
        })

    },
    removeTheme : function (req,res) {
       
        Theme.findByIdAndDelete(req.params.themeId,req.body,(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json({message:"succes"})
        })

    },
    modifyOneFromTheme:function(req,res)
    {
        Theme.findByIdAndUpdate(req.params.forumId,req.body,{new:true},(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data)
        })
    },
    getThemeByModerateur : function (req,res){
        Theme.find({moderateur:req.params.userId},(err,results)=>{
            if(err){
                res.status(400).send({message:"Erreur "});
            }
            else{
                res.status(200).send(results);
            }

        })
    }
}