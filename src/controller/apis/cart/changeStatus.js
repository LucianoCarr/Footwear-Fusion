const db = require("../../../database/models");
const { sendResponse } = require("../../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const { userId, statusOrder } = req.body;
    const isUpdate = await db.Order.update(
      { status: statusOrder },
      {
        where: {
          userId: req.session.userLogin?.id || userId,
          status: "pending",
        },
      }
    );

    return sendResponse(
      res,
      "success",
      {
        message: isUpdate
          ? "Estado de la orden actualizado con éxito"
          : "Error al actualizar el estado de la orden",
      },
      isUpdate ? 200 : 400
    );
  } catch ({message}) {
    sendResponse(res, "error", { message }, 500);
  }
};
