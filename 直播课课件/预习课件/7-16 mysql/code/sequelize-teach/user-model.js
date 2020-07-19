const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {}

module.exports = (sequelize) => {
  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
      updatedAt:false,
      createdAt:false

    }
  );
  return UserModel;
};
