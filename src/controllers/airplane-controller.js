const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST /airplane
 * req.body = {
 *  modelNumber: "airbus320",
 *  capacity: 200
 * }
 *
 * response:
 * {
 *  data: {},
 *  success: true,
 *  message: "Successfully created the airplane",
 *  err: {}
 * }
 */

async function createAirplane(req, res) {
  console.log("Inside airplane controller");
  console.log(req.body);
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
    // return res.status(StatusCodes.CREATED).json({
    //   data: airplane,
    //   success: true,
    //   message: "Successfully created the airplane",
    //   err: {},
    // });
  } catch (error) {
    ErrorResponse.message = error.message;
    ErrorResponse.error = {
      statusCode: error.statusCode,
      explanation: error.explanation,
    };
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
};
