const express = require("express");
const router = express.Router();
const { checkMail, checkPassword } = require("../controller/apis/apiUser");
const {
  getCart,
  clearCart,
  addProduct,
  removeProduct,
  lessQuantity,
  moreQuantity,
} = require("../controller/cartControllers");
/* /api */
router.get("/check-email", checkMail);
router.get("/check-password", checkPassword);

/* /api/cart */
/* SHOPPING CART */
router.post("/cart", getCart);
router.post("/cart/more", clearCart);
router.post("/cart/less", addProduct);
router.post("/cart/add", removeProduct);
router.post("/cart/remove", lessQuantity);
router.post("/cart/clear", moreQuantity);

module.exports = router;
