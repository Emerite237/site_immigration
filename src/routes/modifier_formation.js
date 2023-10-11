const { Formation }= require('../db/sequelize')
const {ValidationError}=require('sequelize')
const cors=require("cors")
module.exports =(app) =>{
    app.put('/api/formation/modifier/:id', cors(),(req,res) =>
    {
        const id= req.params.id

      Formation.update(req.body,{
            where: {id_Formation: id}

        })
        .then(_=>{
          return Formation.findByPk(id).then(Formations => {
                if(Formations===null)
                {
                    
                    const message="le Formations n'existe pas "
                        res.status(404).json({message}) 
                    
                }
                const message='le Formations a bien ete modifie.'
                res.json({Formations})
            })
        
            }).catch(error =>{
                const message="le Formations n'a pas pue etre modifier,reesayer dans quelques instant"
                res.status(500).json({message,data: error}) 
                console.log(error)
            }).catch(error => {
                if(error instanceof ValidationError ){
                return res.status(400).json({message: error.message,data: error})
               }
               if(error instanceof UniqueConstraintError){
                return res.status(400).json({message: error.message})
               }

             
               res.status(500).json({message, data:error})
               
            })
        })
    }
