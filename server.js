
const express = require("express");
const multer = require("multer");
//const upload = multer({dest:"uploads"});
const {v4 : uuid} = require("uuid");
const mime = require("mime-types");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) => 
        cb(null, `${uuid()}.${mime.extension(file.mimetype)}`),
});

const upload = multer({storage});

const app = express();
const PORT = 5050;

app.post("/upload", upload.single("image"), (req, res) => {
    console.log("/upload called!");
    console.log(req.file);    
    res.json({result :  "Success", "req.file" : req.file});
})

app.listen(PORT, () => console.log("Express server listening on PORT " + PORT))