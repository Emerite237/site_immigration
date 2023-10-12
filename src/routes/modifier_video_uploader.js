
const {Video}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const videos=require("../models/Videos")
const path= require("path")
const multer =require("multer");

const cors= require("cors")


const uploadDir = path.join(__dirname, './public/data/uploads');
//const imagePath = path.join(uploadDir, 'uploads', `${filename}.jpg`);


const  MIME_TYPES={
  "video/mp4" : "mp4",
 }
const storage =multer.diskStorage({
  destination : (req,file,cb)=>
  {
     cb(null,"./public/data/uploads/videos/")
  },
  filename : (req,file,cb)=>{
    const name=file.originalname.split(" ").join("_")
    const extention= MIME_TYPES[file.mimetype]
    
    cb(null, name+ "_"+Date.now()+ "."+extention);
  }
})


 const upload= multer({storage:storage,
  
  }
  ).any('file')



module.exports= (server) => {

  server.put('/api/uploads/modifier/video/:id/:id_formation',upload,cors(),async (req,res)=>{

        videos.path=req.file.path.replace(/\\/g, "/")
        videos.nom=req.body.nom
        videos.id_formation=req.params.id_formation

        Video.update(videos,{
            where: {id_videos: id}

        })
        .then(_=>{
          return Video.findByPk(id).then(Videos => {
                if(Videos===null)
                {
                    
                    const message="la video n'existe pas "
                        res.status(404).json({message}) 
                    
                }
                const message='la video a bien ete modifie.'
                res.json({Videos})
            })
        
            })
    
  .catch(error => {
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
  
  

  