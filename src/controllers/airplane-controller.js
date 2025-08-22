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
    ErrorResponse.error = {
      statusCode: error.statusCode,
      explanation: error.explanation,
    };
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = {
      statusCode: error.statusCode,
      explanation: error.explanation,
    };
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = {
      statusCode: error.statusCode,
      explanation: error.explanation,
    };
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyAirplane(req, res) {
  try {
    const airplane = await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = {
      statusCode: error.statusCode,
      explanation: error.explanation,
    };
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
