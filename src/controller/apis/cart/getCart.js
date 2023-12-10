const db = require("../../../database/models");
const { sendResponse } = require("../../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const [order, isCreated] = await db.Order.findOrCreate({
      where: { userId: req.session.userLogin?.id || req.body.userId,status: "pending" },
      include: ["products"],
    });
    sendResponse(res, "success", {
      data: { products: order.products, total: order.total },
    });
  } catch ({ message }) {
    sendResponse(res, "error", { message }, 500);
  }
};
