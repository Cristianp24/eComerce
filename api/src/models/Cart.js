const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cart",
    {
      cartId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      total : {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    },
    {
      timestamps: false,
    }
  );
};
