import mongoose from "mongoose";

const connect = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB")
  }catch(err){
    console.log("mokokokokkok")
  }
};

export default connect;