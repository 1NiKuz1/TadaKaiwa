import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
  declare id: number;
  declare age: number;
  declare number_phone: number;
  declare password: string;
  declare email: string;
  declare tag: string;
  declare name: string;
  declare surname: string;
  declare id_role: number;
  declare readonly created_at: Date;
  declare readonly updated_at: Date;
}

const UserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      number_phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id_role: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

export default UserModel;
