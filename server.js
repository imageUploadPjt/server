
const express = require("express");
const multer = require("multer");
const upload = multer({dest:"uploads"});

const app = express();
const PORT = 5000;

app.post("/upload", upload.single("image"), (req, res) => {
    console.log("/upload called!");
    console.log(req.file);    
    res.json({result :  "Success", "req.file" : req.file});
})

app.listen(PORT, () => console.log("Express server listening on PORT " + PORT))