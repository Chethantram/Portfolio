import mongoose from "mongoose";    
import { type } from "os";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    link:{
        type:String,
        default:"No Link"
    }
},{timestamps:true});


const projectModel = mongoose.models.project || mongoose.model("project",projectSchema);

export default projectModel;