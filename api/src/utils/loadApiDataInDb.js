const fs = require("fs");
const { Brand, Product, Category } = require("../db");
const path = require("path");
const { Op } = require("sequelize");

const filePath = path.join(__dirname, "product.json");

async function loadApiDataInDb() {
  try {
    const apiData = fs.readFileSync(filePath);
    const data = JSON.parse(apiData);

    let createdCount = 0;
    let foundCount = 0;

    // Iterar de forma sincrónica sobre los datos
    for (const productData of data) {
      const { id, brand, model, category, price, imageUrl, details, stock } = productData;

      // Encontrar o crear la marca
      let [marcaBd] = await Brand.findOrCreate({
        where: { name: brand },
      });

      // Encontrar o crear la categoría
      let [tipoBd] = await Category.findOrCreate({
        where: { name: category },
      });

      // Crear el producto y asociarlo con la marca y la categoría
      let [newProduct, productCreated] = await Product.findOrCreate({
        where: { id: id },
        defaults: {
          categoryId: tipoBd.id,
          brandId: marcaBd.id,
          model,
          price,
          imageUrl, 
          details,
          stock: stock || 0,
          deleted: false,
        },
      });

      // Actualizar contadores
      if (productCreated) {
        createdCount++;
      } else {
        foundCount++;
      }
    }

    console.log(
      `¡Datos cargados exitosamente!, ${createdCount} productos creados, ${foundCount} productos encontrados en la base de datos`
    );
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

module.exports = loadApiDataInDb;
