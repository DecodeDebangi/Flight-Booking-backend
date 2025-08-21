const { serverConfig, logger } = require("./config");
const express = require("express");
const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(serverConfig.port, () => {
  console.log(`Server is running on PORT ${serverConfig.port}`);
  logger.info("Successfully started the server", {});
});
