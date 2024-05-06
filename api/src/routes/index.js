const { Router } = require("express");
const  getAllProducts  = require("../controllers/getAllProducts.js");
const getAllBrands = require("../controllers/getAllBrands.js");
const getAllCategory = require("../controllers/getAllCategory.js");
const getProductByID = require("../controllers/getProductById.js");
const searchProducts = require("../controllers/searchProducts.js");
const createProduct = require("../controllers/createProduct.js");
const deleteProduct = require("../controllers/deleteProduct.js");
const disableProduct = require("../controllers/disableProduct.js");
const editProduct = require("../controllers/editProduct.js");
const editStockProduct = require("../controllers/editStockProduct.js");
const restoreProduct = require("../controllers/restoreProduct.js");
const getAllReviews = require("../controllers/getAllReviews.js");
const createReview = require("../controllers/createReview.js");
const postUser = require("../controllers/postUser.js");
const localAuth = require("../controllers/localAuth.js");
const passport = require('passport');




const router = Router();



router.get('/', (req, res) => {
    res.status(200).send('<a href="/auth/google">Iniciar sesión con Google</a>');
});

router.get("/products/search", searchProducts);
router.get("/products", getAllProducts);
router.get("/brands", getAllBrands);
router.get("/category", getAllCategory);
router.get("/products/:id", getProductByID);
router.post("/products", createProduct)
router.delete("/products/:id", deleteProduct);
router.delete("/products/disable/:id", disableProduct);
router.put("/products/edit/:id", editProduct);
router.put("/products/stock/:id", editStockProduct);
router.post("/products/restore/:id", restoreProduct);
router.get("/reviews", getAllReviews);
router.post("/reviews", createReview);


router.post("/login", postUser)
router.get("/login", localAuth)



router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));



router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


router.get("/auth/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/brands");
  });
});





module.exports = router;