const cloudinary = require("cloudinary").v2
// import dotenv from 'dotenv';

// dotenv.config() ;

exports.cloudinaryConnect = ()=>{
     try{
        console.log(process.env.API_KEY)
        console.log(process.env.API_SECRET)
        cloudinary.config({
            cloud_name : process.env.CLOUD_NAME ,
            api_key:process.env.API_KEY ,
            api_secret : process.env.API_SECRET ,
        })

     }catch(err){
        console.log(err);
        res.status(405).json({
            message : err.message
        })
     }
}

exports.uploaderImageToCloudinary = async(file , folder , height ,quality)=>{

    console.log("uploader")
    console.log(process.env.API_KEY)
        console.log(process.env.API_SECRET)
     
    const options = {folder} ;

    if(height){
        options.height = height ;
    }
    if(quality){
        options.quality = quality ;
    }

    options.resource_type = 'auto' ;
    console.log("uploader2")
     
    return await cloudinary.uploader.upload(file.tempFilePath , options) ;
}
