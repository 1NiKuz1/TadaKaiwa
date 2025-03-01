import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import UserModel from "./User";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE!,
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as "mysql",
  }
);

(async () => {
  await sequelize.sync({ force: true });
})();

const User = UserModel(sequelize);

export { sequelize, User };
