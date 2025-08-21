const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

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
    return res.status(StatusCodes.CREATED).json({
      data: airplane,
      success: true,
      message: "Successfully created the airplane",
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Something went wrong while creating the airplane",
      err: error,
    });
  }
}

module.exports = {
  createAirplane,
};
