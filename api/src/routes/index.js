const { Router } = require("express");
const {
  getPokemons,
  buscarPokemon,
  buscarNombrePokemon,
  traerTipos,
  crearPokemon,
  traerPokemonsApi,
} = require("../controllers/controllers");

const router = Router();

router.get("/pokemons", async (req, res) => {
  let { name } = req.query;

  if (name) {
    try {
      name = name.toLowerCase();
      console.log(name);
      const pokemonEncontrado = await buscarNombrePokemon(name);
      res.status(200).json(pokemonEncontrado);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } else {
    try {
      const pokemones = await getPokemons();
      res.status(200).json(pokemones);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
});

router.get("/pokemons/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pokemonEncontrado = await buscarPokemon(id);
    res.status(200).json(pokemonEncontrado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/types", async (req, res) => {
  try {
    const listaPokemones = await traerTipos();
    res.status(200).json(listaPokemones);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/pokemons", async (req, res) => {
  const { Nombre, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo } =
    req.body;
  console.log(Nombre, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipo);
  try {
    const pokemonCreado = await crearPokemon(
      Nombre,
      Vida,
      Ataque,
      Defensa,
      Velocidad,
      Altura,
      Peso,
      Tipo
    );
    res.status(200).json(pokemonCreado);
  } catch (error) {
    res.status(405).json({ error: error.message });
  }
});

module.exports = router;
