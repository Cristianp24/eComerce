const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cartItem",
    {
      cartItemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cartId: {
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
