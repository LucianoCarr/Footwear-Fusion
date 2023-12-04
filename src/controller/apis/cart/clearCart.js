const db = require("../../../database/models");
const { sendResponse } = require("../../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const { userId } = req.body;

    const order = await db.Order.findOne({
      where: { userId: req.session.userLogin?.id || userId, status: "pending" },
    });

    const isDelete = await db.Cart.destroy({
      where: { orderId: order.id },
    });

    return sendResponse(
      res,
      "success",
      {
        message: isDelete
          ? "Productos eliminados con éxito"
          : "Error al eliminar los productos",
      },
      isDelete ? 200 : 400
    );
  } catch (error) {
    sendResponse(res, "error", { message }, 500);
  }
};
