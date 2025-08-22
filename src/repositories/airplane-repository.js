const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }

  async createAirplane(data) {
    try {
      const airplane = await this.create(data);
      return airplane;
    } catch (error) {
      throw new AppError(
        `Something went wrong in the airplane repository layer: ${error}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAirplanes(data) {
    try {
      const airplanes = await this.getAll(data);
      return airplanes;
    } catch (error) {
      throw new AppError(
        `Something went wrong in the airplane repository layer: ${error}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  async getAirplane(id) {
    try {
      const airplane = await this.get(id);
      return airplane;
    } catch (error) {
      throw new AppError(
        `Something went wrong in the airplane repository layer: ${error}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateAirplane(id, data) {
    try {
      const airplane = await this.update(id, data);
      return airplane;
    } catch (error) {
      throw new AppError(
        `Something went wrong in the airplane repository layer: ${error}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  async deleteAirplane(id) {
    try {
      const airplane = await this.destroy({ id: id });
      return airplane;
    } catch (error) {
      throw new AppError(
        `Something went wrong in the airplane repository layer: ${error}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAirplane(id) {
    try {
      const airplane = await this.get(id);
      return airplane;
    } catch (error) {
      throw new AppError(
        `Something went wrong in the airplane repository layer: ${error}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = AirplaneRepository;
