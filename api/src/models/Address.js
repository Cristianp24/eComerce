const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "address",
    {
      addressId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        alllowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["calle", "avenida", "carretera", "pasaje"],
        defaultValue: "calle",
      },
      name: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.STRING,
      },
      barrio: {
        type: DataTypes.STRING,
      },
      localidad: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      provincia: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      codigoPostal: {
        type: DataTypes.STRING,
      },
      reference: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
