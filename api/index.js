const app = require("./src/app");
const { sequelize } = require("./src/db");
require("dotenv").config();
const { PORT } = process.env;
const axios = require("axios");
const {type} = require("./src/db")

const preLoadTypes = async () => {
  const url = "https://pokeapi.co/api/v2/type";
  const response = await axios.get(url);
  const types = response.data;

  types.results.forEach((tipo) => {
    type.findOrCreate({
      where: { Nombre: tipo.name },
    });
  });
};

app.listen(PORT, () => {
  sequelize.sync({ force: true });
  preLoadTypes()
  console.log(`Listen on port ${PORT}`);
});
