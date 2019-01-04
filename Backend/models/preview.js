const mongoose =require('mongoose');

const PreviewSchema = mongoose.Schema({

    title:{
        type :String,
        required :false
    },
    address:{
        type :String ,
        required :false
    },
    category:{
        type:String,
        required :false
    },
    description:{
        type:String,
        required:false
    },
    message:{
        type:String,
        required:false
    },
    hasButtons:Boolean,
    created:Date,
    createdDate:Date,
    end:Number,
    videoUrl:{
        type:String,
        required:false
    },
    ImageUrl:{
        type:String,
        required:false
    }
  
  
})

const Preview =module.exports = mongoose.model('preview',PreviewSchema);