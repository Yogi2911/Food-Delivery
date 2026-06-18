import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Order = sequelize.define(
  "Order",
  {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    items: { type: DataTypes.JSONB, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    address: { type: DataTypes.JSONB, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "Food Processing" },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    payment: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { timestamps: false }
);

export default Order;
