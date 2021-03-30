import dummyData from '../utils/dummyData';

import User from '../models/user.model';

const userService = {
  fetchAllUser() {
    const allUser = dummyData.users.map(user => {
      const newUser = new User();
      (newUser.id = user.id),
        (newUser.name = user.name),
        (newUser.description = user.description),
        (newUser.interestrate = user.interestrate);
      return newUser;
    });
    return allUser;
  },

  createUser(user) {
    const userLength = dummyData.users.length;
    const lastId = dummyData.users[userLength - 1].id;
    const newId = lastId + 1;
    user.id = newId;
    dummyData.users.push(user);
    return user;
  },

  loginUser() {
    const user = dummyData.users.find(user => user.id == id);
    return user || {};
  },


  getAvailableLoans() {
    return;
  }
};

export default userService;
