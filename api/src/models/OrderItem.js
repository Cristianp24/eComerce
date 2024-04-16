const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "orderItem",
    {
      orderItemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
