const { Review, Product, User } = require("../db");

async function createReview(req, res) {
  const { rating, comment, productId, userId } = req.body;

  try {
    const ProductDb = await Product.findByPk(productId);
    if (!ProductDb) {
      return res.status(404).json({ error: "Product no encontrado" });
    }
    const userDb = await User.findByPk(userId);
    if (!userDb) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    // Crear el nuevo review en la base de datos
    const newReview = await Review.create({
      rating,
      comment,
      productId,
      userId,
    });

    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error al crear el Review:", error);
    res.status(500).json({ error: "Error al crear el Review" });
  }
}

module.exports = createReview;


// todavia no implementado