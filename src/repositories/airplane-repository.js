const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");
const { logger } = require("../config");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }

  async getAirplane(id) {
    try {
      const airplane = await this.get(id);
      return airplane;
    } catch (error) {
      logger.error(
        `Something went wrong in the airplane repository layer: ${error}`
      );
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
