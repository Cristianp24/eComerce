const { Category } = require("../db");
async function getAllCategory(req, res) {
  // Obtener las marcas de motos de la base de datos después de haberlos creado
  try {
    const dbCategory = await Category.findAll();
    // Responder con la lista completa de marcas de motos
    res.status(200).json(dbCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las marcas" });
  }
}

module.exports = getAllCategory;