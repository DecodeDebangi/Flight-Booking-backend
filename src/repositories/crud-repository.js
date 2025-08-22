const { logger } = require("../config");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  // async create(data) {
  //   console.log("Inside crud repository");
  //   try {
  //     const result = await this.model.create(data);
  //     return result;
  //   } catch (error) {
  //     logger.error(
  //       `Something went wrong in the crud repository layer: ${error}`
  //     );
  //     throw error;
  //   }
  // }
  async create(data) {
    console.log("Inside crud repository");
    const result = await this.model.create(data);
    return result;
  }

  async destroy(data) {
    const result = await this.model.destroy({
      where: {
        id: data.id,
      },
    });
    if (!result) {
      throw new AppError("Not able to find the data", StatusCodes.NOT_FOUND);
    }
    return result;
  }

  async get(data) {
    const result = await this.model.findByPk(data);
    if (!result) {
      throw new AppError("Not able to find the data", StatusCodes.NOT_FOUND);
    }
    return result;
  }

  async getAll(data) {
    const result = await this.model.findAll(data);
    return result;
  }

  async update(id, data) {
    const result = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return result;
  }

  async upsert(data) {
    const result = await this.model.upsert(data);
    return result;
  }

  async findOne(data) {
    const result = await this.model.findOne(data);
    return result;
  }
}

module.exports = CrudRepository;
