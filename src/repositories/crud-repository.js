const { logger } = require("../config");

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
    try {
      const result = await this.model.destroy({
        where: {
          id: data.id,
        },
      });
      return result;
    } catch (error) {
      logger.error(
        `Something went wrong in the crud repository layer: ${error}`
      );
      throw error;
    }
  }

  async get(data) {
    try {
      const result = await this.model.findByPk(data);
      return result;
    } catch (error) {
      logger.error(
        `Something went wrong in the crud repository layer: ${error}`
      );
      throw error;
    }
  }

  async getAll(data) {
    try {
      const result = await this.model.findAll(data);
      return result;
    } catch (error) {
      logger.error(
        `Something went wrong in the crud repository layer: ${error}`
      );
      throw error;
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      logger.error(
        `Something went wrong in the crud repository layer: ${error}`
      );
      throw error;
    }
  }

  async upsert(data) {
    try {
      const result = await this.model.upsert(data);
      return result;
    } catch (error) {
      logger.error(
        `Something went wrong in the crud repository layer: ${error}`
      );
      throw error;
    }
  }

  async findOne(data) {
    try {
      const result = await this.model.findOne(data);
      return result;
    } catch (error) {
      logger.error(
        `Something went wrong in the crud repository layer: ${error}`
      );
      throw error;
    }
  }
}

module.exports = CrudRepository;
