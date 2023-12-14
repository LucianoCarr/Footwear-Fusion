const express = require("express");
const router = express.Router();
const { checkMail, checkPassword } = require("../controller/apis/apiUser");
const {
  getCart,
  clearCart,
  addProduct,
  removeProduct,
  saveTotal,
  changeStatus,
} = require("../controller/cartControllers");
const { getAllCategory, totalProductInDb, totalOfertas, getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controller/apis/ProductsApiController");
/* /api */
router.get("/check-email", checkMail);
router.get("/check-password", checkPassword);

/* /api/cart */
/* SHOPPING CART */
router.post("/cart", getCart);
router.patch("/cart/changeStatus", changeStatus);
router.patch("/cart/saveTotal", saveTotal);
router.post("/cart/add", addProduct);
router.delete("/cart/remove", removeProduct);
router.delete("/cart/clear", clearCart);

/* Categorias */
router.get('/categories',getAllCategory)

/* CRUD REACT */
router.get('/products/count',totalProductInDb)
router.get('/products/discount',totalOfertas)
router.get('/products',getAllProducts)

router.post('/products',createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router;
