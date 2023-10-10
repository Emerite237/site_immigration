const {User}=require('../db/sequelize')
const {Email}=require('../db/sequelize')
const mail=require('../models/Email')
const {info}= require("console")


const nodemailer=require('nodemailer');

const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
var mails= require("./email")




module.exports= (server) => {
server.post('/api/sendmail/:id', (req,res) =>{

    mail.subject=req.body.subject;
    mail.message=req.body.message;
        
    mail.adresse_expediteur="franckemerites45@gmail.com"
    mail.id_utilisateur=req.params.id;

    var html= '<h1> Hello world</h1>'

    Email.create(mail).then(mail=> {

      const message="mail enregistrer avec succes ";
       mails.send();
    
      return res.json({message,mail})

    }).catch(error => {
      if(error instanceof ValidationError ){
         console.log(error);
      return res.status(400).json({message: error.message,data: error})
     
     }
     if(error instanceof UniqueConstraintError){
      return res.status(400).json({message: error.message})
     }
     const message="le mail  n'a pas pue etre ajouter"
 
     console.log(error);
     res.status(500).json({message, data:error})
     
  })


  }   )
}