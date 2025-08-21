const express = require("express");
const { AirplaneController } = require("../../controllers");
const  AirplaneMiddlewares  = require("../../middlewares");

const router = express.Router();

console.log("Inside airplane routes");

// /api/v1/airplanes/
router.post(
  "/",
  AirplaneMiddlewares.validateCreateAirplane,
  AirplaneController.createAirplane
);

module.exports = router;
