const User = require('../models/User')

//Get All user

const getAllUser = async(req,res)=>{

  try
  {
const GetAlluser = await User.find();
res.json(GetAlluser)

  }
  catch(error)
  {
   return res.status(401).send({error : 'There is No User! '})
  }
}
//Get a single user

const getuserDetials = async(req,res)=>{
    const {id} = req.params;

    try
    {
      const findUser = await User.findById(id);
      res.json(findUser)
    }
    catch(error)
    {
     return res.status(401).send({error: ' There is no Match, Please try again !'})
    }
}

// Update a user

const updatedUser = async (req, res) => {
  const { _id } = req.user;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        FullName: req?.body?.FullName,
        UserName: req?.body?.UserName,
        Email: req?.body?.Email,
        PhoneNumber: req?.body?.PhoneNumber,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
};

// delete a single user

const deleteaUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteaUser = await User.findByIdAndDelete(id);
    res.json({
      deleteaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getuserDetials,updatedUser,deleteaUser,getAllUser}
