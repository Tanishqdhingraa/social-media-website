import express from 'express'
import { registerUser } from '../contollers/authControllers.js';
import uploadFile from '../middlewares/multer.js';



const router = express.Router();

router.post("/regitser",uploadFile,registerUser)

export default router;