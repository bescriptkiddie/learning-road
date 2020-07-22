const users = [];
module.exports = {
  addUser(id, username) {
    users.push({
      id,
      username,
    });
  },


  findUserById(id){
      return users.find((userInfo)=> userInfo.id == id)
  }
};
