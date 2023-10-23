
require("dotenv").config();

const express = require("express");
const multer = require("multer");
const {v4 : uuid} = require("uuid");
const mime = require("mime-types");
const mongoose = require("mongoose");
const Image = require("./models/image");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) => 
        cb(null, `${uuid()}.${mime.extension(file.mimetype)}`),
});

const upload = multer({storage});

const app = express();
const PORT = 5000;

console.log(process.env)

mongoose.connect(
        process.env.MONGO_URI,
    )
    .then(()=>{
        console.log("MongoDB Connected")
        
        app.post("/upload", upload.single("image"), async (req, res) => {
            console.log("/upload called!");
            await new Image({
                key:req.file.filename, 
                originalFileName:req.file.originalname
            }).save();
            console.log(req.file)
            res.json(req.file);
        });
        
        app.listen(PORT, () => console.log("Express server listening on PORT " + PORT));
    
    })
    .catch((err) => console.log(err));
