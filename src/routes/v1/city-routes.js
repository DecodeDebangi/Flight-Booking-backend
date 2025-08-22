const express = require("express");
const { CityController } = require("../../controllers");
// const CityMiddlewares = require("../../middlewares");

const router = express.Router();

console.log("Inside city routes");

// /api/v1/cities/
router.post("/", CityController.createCity);

router.get("/", CityController.getCities);
router.get("/:id", CityController.getCity);
router.delete("/:id", CityController.destroyCity);

module.exports = router;
