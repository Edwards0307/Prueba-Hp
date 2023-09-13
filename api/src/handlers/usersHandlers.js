const getUsersHandlers = (req, res) => {
  const { name } = req.query;
  name !== undefined
    ? res.send(`Esto me trae el pokemon ${name}`)
    : res.send("Esto me trae todos los pokemon");
};

const getUserHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Esto trae un pokemon por id ${id}`);
};

const createUserHandlers = (req, res) => {
  const { name, type } = req.body;
  res.send(`Crear un pokemon con nombre:
  name: ${name}
  type: ${type}`);
};

module.exports = {
  getUsersHandlers,
  getUserHandler,
  createUserHandlers,
};
