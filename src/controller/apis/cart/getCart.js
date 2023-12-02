const db = require("../../../database/models");
const { sendResponse } = require("../../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const [order, isCreated] = await db.Order.findOrCreate({
      where: { userId: req.session.userLogin?.id || req.body.userId },
      include: ["products"],
    });
    sendResponse(res,"success", {cartProducts:order.products})
  } catch ({message}) {
    sendResponse(res,"error", {message}, 500);
  }
};
