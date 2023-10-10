const {User} =require('../db/sequelize');
const jwt =require('jsonwebtoken');
const Token=require('../auth/auth');


module.exports= (app) => {

    app.post('/api/login',(req,res)=>{
    
    User.findOne({ where: {nom: req.body.nom} }).then( user =>{

            return res.json({'token:':Token.generetedTokenForUser(user)})
        }
    ).catch(error =>{
        const message =" l' utilisateur n'a pas pue se connecte , reesayer dans quelque instants..."
        console.log(error)
        return res.json({message, data:error})
    } )

    } )
}