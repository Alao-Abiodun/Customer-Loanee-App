import userService from '../services/user.services';

const UserController = {
  getAllUser(req, res) {
    const allUsers = userService.fetchAllUser();
    return res.status(200).json({
      data: allUsers,
    });
  },

  createUser(req, res) {
    const user = req.body;
    const createdProfile = userService.createUser(user);
    return res.status(201).json({
      data: createdProfile,
    });
  },

  loginAUser(req, res) {
    const id = req.params.id;
    const foundUser = userService.loginUser(id);
    return res.status(200).json({
      data: foundUser,
    });
  },
};

export default UserController;
