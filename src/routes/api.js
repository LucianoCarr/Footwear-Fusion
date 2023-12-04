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

module.exports = router;
