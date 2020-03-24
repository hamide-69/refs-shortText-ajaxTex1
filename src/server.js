
const express = require('express') ;
const fileUploade = require('express-fileupload');

const app=express();
app.use(fileUploade()) ;

//Uploade Endpoint 

app.post('/upload' ,(req,res) =>{
    if(req.file===null){
      return res.status(400).json({msg:'No file uploaded'}) ;  
    }
    const file=req.files.file ;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err =>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName:file.name ,filePath:`/uploads/${file.name}`});
    });
});

app.Listen(5000,() => console.log('Server Started...')) ;