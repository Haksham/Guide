import { Schema } from "mongoose";
import mongoose from "mongoose";

const schema=new Schema(
  {
  title:String,
  description:String,
  },
  {
    timestamps:true,
  }
);

const topic = mongoose.models.topic || mongoose.model("topic",schema);

export default topic;