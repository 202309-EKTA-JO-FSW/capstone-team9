const user = require('../models/User')
const isAdmin = async(req,res,next)=>{
    const{email}= req.user;
    const adminUser = await user.findOne({email});
    if(adminUser.UserType !== "admin"){
        throw new Error ('You are not an admin')
    }
   else {
    next();
   }
};

module.exports={isAdmin}