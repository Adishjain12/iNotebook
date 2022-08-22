const mongoose=require('mongoose');

// const mongoURI="mongodb://localhost:27017/inotebook";
const mongoURI="mongodb+srv://inotebook:inotebook@cluster0.uojnwjq.mongodb.net/test";

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo successfully");
    })
}

module.exports=connectToMongo;