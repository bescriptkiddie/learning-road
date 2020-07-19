// 创建 user 表

const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {}

module.exports = (sequelize) => {
  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      sequelize,
      createdAt:false,
      updatedAt:false
    }
  );

  return UserModel;
};
