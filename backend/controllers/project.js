import projectModel from '../models/projectModel.js'
import fs from 'fs'


const addProject = async(req,res)=>{
    let image_fileName = `${req.file.filename}`
    const project = new projectModel({
        name:req.body.name,
        image:image_fileName,
        description:req.body.description,
        link : req.body.link,
    });

    try {
        await project.save();
        res.json({success:true,message:"Project is added"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }
    
}

const getAllProjects = async(req,res)=>{
    try {
        const response  = await projectModel.find({});
        res.json({success:true,data:response});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }
}

const getProjectById = async (req,res) => {
    try {
        const {id} = req.params;
       const project = await projectModel.findById(id);
    if (!project) {
        res.json({success:false,message:"No project Found"});
    }

    res.json({success:true,data:project}); 
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"}); 
        
    }
    

}


const removeProject = async(req,res)=>{
    try {
        const project = await projectModel.findById(req.body.id);
        fs.unlink(`uploads/${project.image}`,()=>{});
        await projectModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Project Removed"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }

    
}




export {addProject,getAllProjects,removeProject,getProjectById};