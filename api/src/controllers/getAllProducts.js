const { Product, Brand } = require("../db");

async function getAllProducts(req, res) {
  try {
    // Recuperar todos los productos de la base de datos
    const products = await Product.findAll({
      include: Brand, // Incluye la relación con la marca
    });
    // Devolver los productos como respuesta
    res.status(200).json(products);

  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = getAllProducts;
