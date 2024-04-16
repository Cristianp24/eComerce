const { Product, Brand } = require('../db');

async function searchProducts(req, res) {
  const { brand, model } = req.query;

  try {
    let products;

    if (model) {
      // Si se especifica un modelo pero no una marca, buscar todos los productos por modelo
      products = await Product.findAll({
        where: {
          model: model
        }
      });
    } else if (brand) {
      // Si se especifica una marca pero no un modelo, buscar todos los productos por marca
      // Buscar la marca por nombre
      const brandInstance = await Brand.findOne({ where: { name: brand } });

      if (!brandInstance) {
        return res.status(404).json({ message: 'Marca no encontrada' });
      }

      products = await Product.findAll({
        where: {
          brandId: brandInstance.id
        }
      });
    } else {
      return res.status(400).json({ message: 'Se debe proporcionar al menos una marca o un modelo para realizar la búsqueda' });
    }

    if (products.length === 0) {
      return res.status(404).json({ message: 'No se encontraron productos para los criterios de búsqueda especificados' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Error al buscar productos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = searchProducts;



// endpoint for request : http://localhost:3001/products/search?brand=Motorola&model=Moto%20G%2051

// endpoint search for model : http://localhost:3001/products/search?model=Moto%20G%2053

// endpoint search for brand : http://localhost:3001/products/search?brand=Samsung