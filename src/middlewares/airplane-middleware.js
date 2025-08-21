const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function validateCreateAirplane(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Model number is required";
    ErrorResponse.error = {
      explanation: "Model number is not present or in incorrect format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    //     return res.status(StatusCodes.BAD_REQUEST).json({
    //       message: "Model number is required",
    //       success: false,
    //       data: {},
    //       error: {
    //         explanation:
    //           "Model number is not present or in incorrect format in the request body",
    //       },
    //     });
  }
  if (!req.body.capacity) {
    ErrorResponse.message = "Capacity is required";
    ErrorResponse.error = {
      explanation:
        "Capacity is not present or in incorrect format in the request body",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (req.body.capacity <= 0) {
    ErrorResponse.message = "Capacity cannot be negative";
    ErrorResponse.error = {
      explanation: "Capacity cannot be 0 or negative",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateAirplane,
};
