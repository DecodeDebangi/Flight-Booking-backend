const { serverConfig, logger } = require("./config");
const express = require("express");
const apiRoutes = require("./routes");

const app = express();

// parse the request body in JSON format
app.use(express.json());
// parse the request body in URL encoded format , extended: true means that the urlencoded parser will parse the request body to a JavaScript object
app.use(express.urlencoded({ extended: true }));


app.use("/api", apiRoutes);


app.listen(serverConfig.port, () => {
  console.log(`Server is running on PORT ${serverConfig.port}`);
  logger.info("Successfully started the server", {});
});
