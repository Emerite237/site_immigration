const {Formation}= require('../db/sequelize')
const cors= require('cors')


module.exports= (server) => {
   server.get('/api/liste/formation',/* auth,*/cors(),async(req,res,next)=>{
   
try {

   var Formations= await  Formation.findAll({
      
        limit:6,
        raw:true
      }
       
      )
      
      res.json(Formations) }
      
       catch (error ){
        
           res.status(500).json({data: error}) 
           console.log(error)}
       
   }) 
}