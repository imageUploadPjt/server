const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
    {
        key : {type:String, required:true},
        originalFileName: {type:String, required:true},
    }, 
    {timestamps:true}
)

module.exports = mongoose.model("tdd", ImageSchema)
//tdd는 몽고 db의 collection 이름, 여기서는 tdd에 대응되는 몽고 db 콜랙션 이름은 tdds , s가 붙는다