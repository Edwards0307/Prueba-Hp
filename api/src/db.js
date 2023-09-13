const { Sequelize } = require("sequelize");
const modelPokemon = require("./models/Pokemon");
const modelType = require("./models/Type");
require("dotenv").config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

modelPokemon(sequelize);
modelType(sequelize);

const { pokemon, type } = sequelize.models;

pokemon.belongsToMany(type, { through: "PokemonType" });
type.belongsToMany(pokemon, { through: "PokemonType" });

module.exports = { sequelize, ...sequelize.models };
