// 使用 orm
const { Sequelize } = require("sequelize");
const getUserModel = require("./userModel");

// 连接
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: "3306",
  username: "root",
  password: "123456",
  database: "web09",
});

// users
const UserModel = getUserModel(sequelize);
// 如果没有表的话，会创建一个
sequelize.sync()
// sequelize.sync({ force: true });

// 添加数据
UserModel.create({
    age:100,
    name:"xiao11"
})
