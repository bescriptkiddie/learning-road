const { Sequelize } = require("sequelize");
const getUserModel = require("./user-model");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: "3306",
  username: "root",
  password: "123456",
  database: "web08",
});

const UserModel = getUserModel(sequelize);
// model 对象
// 同步
sequelize.sync();
// 强制同步
// sequelize.sync({force:true})

// 添加数据
UserModel.create({
  name: "小黑黑",
  age: 55,
});
