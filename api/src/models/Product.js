const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "product",
    {
     
      brandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "brands",
          key: "id",
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      details: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, 
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      //-------------------------------------------------------------
    },
    {
      timestamps: false,
    }
  );
};
