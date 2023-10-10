
const {Formation}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')

const auth=require("../auth/auth")

const formation = require('../models/Formations')
const cors=require("cors")

module.exports= (server) => {
   server.post('/api/creation/formation',cors(),(req,res)=>{



   
    formation.titre=req.body.titre;
   
    formation.description=req.body.description;
    
   Formation.create(formation)
    .then(formations =>{
        const message ='le formations a bien ete ajouter.'
        res.json({message,data: formations})
    }).catch(error => {
     if(error instanceof ValidationError ){
        console.log(error);
     return res.status(400).json({message: error.message,data: error})
    
    }
    if(error instanceof UniqueConstraintError){
     return res.status(400).json({message: error.message})
    }
    const message="la formations n'a pas pue etre ajouter"

    console.log(error);
    res.status(500).json({message, data:error})
    
 })
 })

    


     
    
}