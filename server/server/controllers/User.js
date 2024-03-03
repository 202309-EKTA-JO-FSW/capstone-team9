const jwt = require('jsonwebtoken')
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

const generateToken = async (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET , { expiresIn: '1h' });
}

const signUp = async (req, res) => {

  const { UserID, FullName, UserName,Email,Password,Address,PhoneNumber,UserType,DateOfBirth,Nationality } = req.body;

  try {

      if (UserName && Email && Password) {
          const user = await User.create({UserID, FullName, UserName,Email,Password,Address,PhoneNumber,UserType,DateOfBirth,Nationality});    

          const token = await generateToken(user);
          res.status(200).json({ message: 'Sign-up successful', user, token})
      }
      else {
          res.status(500).json({ message: 'All fields are required' });
      }

  } catch (err) {
      res.status(500).json({ message: 'Sign-up failed', error: err.message });
  }
};

const signIn = async (req, res) => {
  const { username,  password } = req.body;

  try {
      if (username &&  password) {
          const user = await User.findOne({ UserName: username });
          if (!user)
              return res.status(404).json({ message: 'Invalid Username orPassword' });

          if (user.__v > 0) 
              return res.status(404).json({ message: 'already signedIn' });

          const token = await generateToken(user);
          await user.save();

          res.status(200).json({ message: 'Signin successful', user, token: token });
      } else {
          res.status(400).json({ message: 'Username or Password are required' });
      }
  } catch (err) {
      res.status(500).json({ message: 'Sign-in failed', error: err.message });
  }
}

const signOut = async (req, res) => {
  const userId = req.body.UserID
  try {
      const user = await User.find({ UserID: userId });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      user.token = null
      await user.save();
      
      res.status(200).json({ message: 'Signout successful' });
  } catch (err) {
      res.status(500).json({ message: 'Sign-out failed', error: err.message });
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
    res.status(200).json("User has been Updated.");
  } catch (error) {
    return res.status(401).send({error: ' There is no Match, Please try again !'})
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
    return res.status(401).send({error: ' Can not Delelte The User !'})
  }
};


module.exports = { getuserDetials,updatedUser,deleteaUser,getAllUser,signUp,signIn,signOut}


