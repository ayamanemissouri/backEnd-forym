

const User= require('../models/user');


module.exports = {
    addUser : function(req,res){
        const user=new User(req.body);
        user.save().then(data=>{
            res.status(200).send(data);
        }).catch(err=>{
            res.status(500).send({
                message:err.message || "Erreur dans la création de l'utilisateur."
            });
        })
       
    },
    getAllUsers: function (req,res)  {
        
            User.find().then(users=>{
                res.send(users);
            }).catch(err => {
                res.status(500).send({
                    message:err.message || " Probleme dans le serveur "
                })
            })
    },

    getUser : function (req,res) {
            User.findById(req.params.userId).then(user=>{
                res.send(user);
            }).catch(err=>{
                res.status(500).send({
                    message: err.message || "Probleme dans le serveur"}
            )
            })

        
    },
    

    modifyUser : function (req, res) {
        User.findByIdAndUpdate(req.params.userId,req.body,{upsert:true,new:true},(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data)
        })

    },
    removeUser : function (req,res) {
       
        User.findByIdAndDelete(req.params.userId,req.body,(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json({message:"succes"})
        })

    },
    modifyOneFromUser:function(req,res)
    {
        User.findByIdAndUpdate(req.params.userId,req.body,{new:true},(err,data)=>{
            if (err){
                return res.status(400).json({error:"erreur"})
            }
            return res.status(200).json(data)
        })
    }
}
6866800526465161