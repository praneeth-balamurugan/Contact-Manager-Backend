const User = require('./../db/user'); // Correct path to the user model

async function addUser(req, res) {
  console.log('addUser called with body:', req.body);
  try {
    let user = new User({
      ...req.body
    });

    await user.save();
    console.log('User saved:', user);
    return res.status(201).send(user.toObject());
  } catch (err) {
    console.error('Error in addUser:', err);
    return res.status(500).send(err);
  }
}

async function getUsers(req, res) {
    const users = await User.find({});
    return res.status(200).send(users);
  }
   

async function getUser(req, res) {
      const users = await User.find({});
      return res.status(200).send(users);
  }

  async function getUser(id) {
    const user = await User.findById(id);
    return user.toObject();
}

async function updateUser(id,userModel) {
    const filter={ _id: id };
    await User.findOneAndUpdate(filter,userModel);
}


async function deleteUser(id) {
    await User.findByIdAndDelete(id);
}
module.exports = { addUser, getUsers,getUser,updateUser,deleteUser };
