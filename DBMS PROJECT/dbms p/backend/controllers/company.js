import { Company } from "../models/company.js";
import { User } from "../models/user.js";



export const newCom =async (req,res,next)  => {
    try{
        const { name, description, role, salary, pocEmail, branch, timeline, active, appliedUsers } = req.body;
        const user = await User.find({ email: pocEmail });
        const { _id } = user[0];
        await Company.create({ name, description, role, salary, poc: _id, branch, timeline, active, appliedUsers });
        res.status(200).json({
            success:true,
            message:"Company added successfully"
        })
    }
    catch(error){
        console.log(error);
        next(error);
    }
};

export const getCom= async(req,res,next) =>{
    try{
        const companies=await Company.find();
        if(!companies){
          return res.status(400).json({
            success:"false",
            message:"company not found"
          })
        }
        res.status(200).json({
          success:true,
           result: companies,
        })
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

export const applyComUser = async (req, res, next) => {
    try {
      const company = await Company.findById(req.params.id);
  
      if (!company) return next(new ErrorHandler("Company not found", 404));
  
    //   console.log(req.user._id);
      company.appliedUsers.push(req.user._id);
      await company.save();
  
      res.status(200).json({
        success: true,
        message: "Task Updated!",
      });
    } catch (error) {
      next(error);
    }
  };

  export const updateCom = async (req,res,next)=>{
    try{
      const company = await Company.findById(req.params.id);
    const { name, description, role,salary, branch, deadline, active, appliedUsers } = req.body;
    if(!name&&!description&&!role&&!salary&&!branch&&!deadline&&!active&&!appliedUsers){
     return res.status(404).json({
        error:"nothing entered",
      })
    }
    if(name){
      company.name=name;
    }
    if(description){
      
      company.description=description;
    }
    if(role){
      company.role=role;
    }
    if(salary){
      company.salary=salary;
    }
    if(branch){
      company.branch=branch;
    }
    if(deadline){
      company.timeline=deadline;
    }
    if(active){
      company.active=active;
    }
    if(appliedUsers){
      company.appliedUsers=appliedUsers;
    }
    await company.save();
  res.status(200).json({
    sucess:true,
    message:"company updated",
  })
  }
    catch(err){
      next(err);
    }


  };
  

export const deleteCom= async(req,res,next)=>{
  try{
    const company=await Company.findById(req.params.id)
    if(!company){
    return res.status(404).json({
        success:"false",
        message:"company not found"
      })
    }
    await company.deleteOne()
    res.status(200).json({
      success:"true",
      message:"company deleted"
    })
  }
  catch(err){
    next(err)
  }
}