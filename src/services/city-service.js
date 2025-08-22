const { CityRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
  console.log("Inside airplane service");
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log(explanation);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Cannot create a airplane object"
    );
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyCity(id) {
  try {
    const city = await cityRepository.destroy({ id: id });
    return city;
  } catch (error) {
    throw new AppError("Cannot delete city", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (error) {
    throw new AppError("Cannot update city", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function destroyCity(id) {
  try {
    const city = await cityRepository.destroy({ id: id });
    return city;
  } catch (error) {
    throw new AppError("Cannot delete city", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  destroyCity,
  updateCity,
};
