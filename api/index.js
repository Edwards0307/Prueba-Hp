const app = require("./src/app");
const { sequelize } = require("./src/db");
require("dotenv").config();
const { PORT } = process.env;
const axios = require("axios");
const { type } = require("./src/db");
const { preLoadTypes } = require("./src/controllers/controllers");

app.listen(PORT, () => {
  preLoadTypes();
  sequelize.sync({ force: true });
  console.log(`Listen on port ${PORT}`);
});
