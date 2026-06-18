import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Food = sequelize.define(
  "Food",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: false }
);

export default Food;
