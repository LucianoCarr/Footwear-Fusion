const db = require("../../../database/models");
const { sendResponse } = require("../../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const { productId, userId } = req.body;
    const [order, __] = await db.Order.findOrCreate({
      where: { userId: req.session.userLogin?.id || userId, status: "pending" },
      defaults: {
        userId: req.session.userLogin?.id || userId,
      }
    });
    const [_, isCCreate] = await db.Cart.findOrCreate({
      where: { productId },
      defaults: { productId, orderId: order.id },
    });

    return sendResponse(
      res,
      "success",
      {
        message: isCCreate
          ? "Producto agregado con éxito"
          : "El producto no puede agregarse dos veces",
      },
      isCCreate ? 202 : 200
    );
  } catch ({ message }) {
    sendResponse(res, "error", { message }, 500);
  }
};
