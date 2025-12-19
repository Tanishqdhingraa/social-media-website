import { User } from "../models/usermodel";

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

        


    } catch (error) {
        res.status(500).json({
            message: `some errror occured in register user `
        })
    }
}