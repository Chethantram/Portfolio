import express from 'express'
import multer from 'multer'
import {addProject,getAllProjects,removeProject,getProjectById} from '../controllers/project.js'
const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename:(req,file,cd)=>{
      cd(null,`${Date.now()}${file.originalname}`);
  }
});
const upload = multer({storage:storage});

router.post('/add-project',upload.single('image'),addProject);
router.get('/list',getAllProjects);
router.get('/:id',getProjectById);
router.post('/remove',removeProject);


export default router;