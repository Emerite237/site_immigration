
const {User}=require('../db/sequelize')
const {Email}=require('../db/sequelize')

const {info}= require("console")


const nodemailer=require('nodemailer');

const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
module.exports.send = async function(mail) {


  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    tls:{
         ciphers:"SSLv3"
    },
    auth: {
      user: 'franckemerites45@outlook.com',
      pass: 'franckemerites142002'
    }
  });
const mailOptions = {
  from: 'franckemerites45@outlook.com',
  to: mail,
  subject: "Confirameion d'incription",
  text: 'Félicitation votre inscription a ete confirme dans le site France-etude .'
};

         transporter.sendMail(mailOptions,function (error,info){
          if(error){
          console.log(error);
          }
          else{
            console.log("mail envoye"+ info.response);
          }})


  /*
   
    /*

 */
} 
