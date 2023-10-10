const jwt =require('jsonwebtoken');
const privatekey=require('../auth/private_key');

module.exports= {


    generetedTokenForUser: function(utilisateurs){
        return jwt.sign(
            {
                userId: utilisateurs.id
            },
            privatekey,
            {
                expiresIn:'1h'
            }
           
        )

       

    }

}


    /*
    const autorizationheader= req.headers.authorization

    if(!autorizationheader){
        const message = "Vous n'avez pas fourni de jetons lors de votre requete";

        return res.status(401).json({message})
    }

    const token = autorizationheader.split(' ')[1];
    const decodedtoken = jwt.verify(token,privatekey, (error,decodedtoken)=>{

        if(error){
            const message ="l'utilisateur ne peut pas acceder à cette ressource  "

            return res.status(401).json({message,data: error})
        }

        const userID= decodedtoken.userID;

        if(req.body.userID && req.body.userID !==userID )
        {
            const message="l'identifiant de l'utilisateur est invalide";

            return res.status(401).json({message})
        }
        else {
            next();
        }
    } )*/
