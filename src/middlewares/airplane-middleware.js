const { StatusCodes } = require("http-status-codes");

function validateCreateAirplane(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Model number is required",
      success: false,
      data: {},
      err: {
        explanation:
          "Model number is not present or in incorrect format in the request body",
      },
    });
  }
  if (!req.body.capacity) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Capacity is required",
      success: false,
      data: {},
      err: {
        explanation:
          "Capacity is not present or in incorrect format in the request body",
      },
    });
  }
  if (req.body.capacity <= 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Capacity cannot be negative",
      success: false,
      data: {},
      err: {
        explanation: "Capacity cannot be 0 or negative",
      },
    });
  }
  next();
}

module.exports = {
  validateCreateAirplane,
};
