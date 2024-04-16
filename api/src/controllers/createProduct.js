const { Product, Brand, Category } = require('../db');
const { Sequelize } = require('sequelize'); // Asegúrate de importar Sequelize

async function createProduct(req, res) {
  const { brand, model, category, price, imageUrl, details, stock } = req.body;

  try {
    // Obtener el último ID de producto
    const lastProduct = await Product.findOne({
      attributes: [[Sequelize.fn("max", Sequelize.col("id")), "maxId"]],
    });
    const lastId = lastProduct.getDataValue("maxId");

    // Incrementar el último ID en 1 para obtener el nuevo ID
    const newId = lastId ? lastId + 1 : 1;

    // Buscar la marca por su nombre
    const brandInstance = await Brand.findOne({ where: { name: brand } });
    
    // Buscar la categoría por su nombre
    const categoryInstance = await Category.findOne({ where: { name: category } });

    // Crear el producto en la base de datos con el nuevo ID generado
    const newProduct = await Product.create({
      id: newId,
      brandId: brandInstance.id,
      model: model,
      categoryId: categoryInstance.id,
      price: price,
      imageUrl: imageUrl,
      details: details,
      stock: stock
    });

    res.status(201).json(newProduct); // Devolver el nuevo producto creado
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = createProduct;


// modelo de prod para crear en la base de datos {
//   "brand": "Samsung",
//   "model": "Galaxy S21",
//   "category": "Celulares",
//   "price": 99999,
//   "imageUrl": [
//     "https://example.com/image1.jpg",
//     "https://example.com/image2.jpg"
//   ],
//   "details": {
//     "ram": "8 GB",
//     "processor": "Exynos 2100",
//     "frontCamera": "10 MP",
//     "rearCamera": "64 MP",
//     "battery": "4000 mAh",
//     "dimensions": "151.7 x 71.2 x 7.9 mm",
//     "os": "Android 11",
//     "memory": "128 GB",
//     "display": "6.2 inches Dynamic AMOLED"
//   },
//   "stock": 50
// }
