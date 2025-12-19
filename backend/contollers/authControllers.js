import { User } from "../models/usermodel.js";
import generateToken from "../utils/generateToken.js";
import getDataUrl from "../utils/urlGenrator.js"
import bcrypt from 'bcrypt'
import Cloudinary from 'cloudinary';

export const registerUser = async(req , res)=>{
    try {
        const {name , password , gender , email }= req.body;

        const file = req.file;
        
        if(!name || !email || !password  || !gender || !file){
            return res.status(400).json({
                message:` please fill all the credentials`
            })
        }

        let user = await User.findOne({email})

        if(user ) return res.status(400).json({
            message:`User already exists`
        })

        const fileUrl = getDataUrl(file)

        const hashPassword = await bcrypt.hash(password , 10);

        const mycloud = await Cloudinary.v2.uploader.upload(fileUrl.content)

        user = await  User.create({
            name, 
            email,
            password:hashPassword,
            gender,
            profilePic:{
                id: mycloud.public_id,
                url:mycloud.secure_url,
            }
        })
        generateToken(user._id,res);

        res.status(200).json({
            message:`user registered succesfully `,
            user
        })
    } catch (error) {
        res.status(500).json({
            message: `some errror occured in register user `
        })
    }
}