import {User} from "../models/user.js";
import {Company} from "../models/company.js";
import ErrorHandler from "../middlewares/error.js";

export const getPoc=async(req,res,next)=>{
    try{
        const id=req.user._id;
        // console.log(id);
        const companies=await Company.find({poc:id});
        res.status(200).json({
            success:true,
            result:companies
        })
    }
    catch(err){
        next(err);
    }
}

