const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "type",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
