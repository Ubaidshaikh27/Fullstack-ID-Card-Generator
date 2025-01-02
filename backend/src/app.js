import { Router } from 'express';
import {asyncHandler} from "../utils/asyncHandler.js";
import { User } from '../models/user.models.js';
import multer from 'multer';

const router = Router();






router.route("/user").post( asyncHandler(async (req, res) => {



    try {

        const {fname, lname, position, dept, email, year, idNumber, image} = req.body;
        console.log("fname:", fname);
        console.log("lname:", lname);
        console.log("id: ", idNumber);
        console.log("image:", image);
    
        

        
        
        if (!fname || !lname || !position || !dept || !email || !year) {
            return res.status(400).json({success:false, message:"All fields are required"})
  
        }



        const existingUser = await User.findOne({ idNumber:idNumber });

        if (existingUser) {
          console.log('User with this idnumber already exists.');
          return { success: false, message: 'User with this idnumber already exists.' };
        }

        const newUser = await User.create({
            fname:fname,
            lname:lname,
            position:position,
            dept:dept,
            email:email,
            year:year,
            idNumber: idNumber,
            image: image

        })
        console.log(newUser);
        



    } catch (error) {
        console.log("Error in saving the file", error.message);
        
    }
    
}));



router.route("/table").get( asyncHandler(async (req, res) => {
    try {

        const users = await User.find();
        res.status(200).json({users})

    } catch (error) {

        console.log("Error in fetching the data", error.message);
        
    }
}))



export default router;