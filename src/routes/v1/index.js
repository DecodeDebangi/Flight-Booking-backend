const express = require("express");
const router = express.Router();
const { infoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
console.log("Inside v1 routes");

router.use("/airplanes", airplaneRoutes);
router.get("/info", infoController.info);

router.use("/cities", cityRoutes);

module.exports = router;
