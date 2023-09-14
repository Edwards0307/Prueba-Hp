const { pokemon, type } = require("../db");
const axios = require("axios");

let idCreados = 0;

const traerPokemonsApi = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
    );
    const data = response.data;

    const links = data.results.map((pokemon) => pokemon.url);
    const responses = await Promise.all(links.map((url) => axios.get(url)));
    const responseData = responses.map((response) => response.data);

    // return data
    return filtrarArrayApi(responseData);
  } catch (error) {
    throw error;
  }
};

const filtrarArrayApi = (arrayPokemones) => {
  const infoRelevante = arrayPokemones.map((pokemon) =>
    filtrarPokemonApi(pokemon)
  );
  return infoRelevante;
};

const filtrarPokemonApi = (pokemon, ruta = "Home") => {
  const tipos = [];
  pokemon["types"].forEach((element) => {
    tipos.push(element["type"]["name"]);
  });
  let pokemonFiltrado = {};
  if (ruta === "Detail") {
    pokemonFiltrado = {
      ID: pokemon["id"],
      Nombre: pokemon["name"],
      Vida: pokemon["stats"][0]["base_stat"],
      Ataque: pokemon["stats"][1]["base_stat"],
      Defensa: pokemon["stats"][2]["base_stat"],
      Velocidad: pokemon["stats"][5]["base_stat"],
      Foto: pokemon["sprites"]["other"]["official-artwork"]["front_default"],
      Altura: pokemon["height"],
      Peso: pokemon["weight"],
      Tipo: tipos,
    };
  } else {
    pokemonFiltrado = {
      ID: pokemon["id"],
      Nombre: pokemon["name"],
      Ataque: pokemon["stats"][1]["base_stat"],
      Vida: pokemon["stats"][0]["base_stat"],
      Defensa: pokemon["stats"][2]["base_stat"],
      Velocidad: pokemon["stats"][5]["base_stat"],
      Foto: pokemon["sprites"]["other"]["official-artwork"]["front_default"],
      Tipo: tipos,
    };
  }

  return pokemonFiltrado;
};

const traerPokemonsDB = async () => {
  let PokemonsBD = await pokemon.findAll({
    include: [
      {
        model: type,
        attributes: ["Nombre"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  const PokemonsBDcorregida = PokemonsBD.map((items) => items.dataValues);
  PokemonsBDcorregida.map((pokemon) => {
    filtrarPokemonBD(pokemon);
  });
  return PokemonsBDcorregida;
};

const filtrarPokemonBD = (pokemon) => {
  const tipos = [];
  pokemon.types.forEach((element) => tipos.push(element["Nombre"]));
  pokemon["Tipo"] = tipos;
  delete pokemon.types;
  return pokemon;
};

const getPokemons = async () => {
  const PokemonsBD = await traerPokemonsDB();
  const PokemonsApi = await traerPokemonsApi();
  //const PokemonsApi = []
  const Pokemons = [...PokemonsBD, ...PokemonsApi];
  return Pokemons;
};

const buscarPokemon = async (id) => {
  if (id[0] == "C") {
    try {
      const resultado = await pokemon.findOne({
        where: { ID: id },
        include: [
          {
            model: type,
            attributes: ["Nombre"],
            through: {
              attributes: [],
            },
          },
        ],
      });

      if (resultado == null)
        throw Error(`No se encontro el pokemon con id ${id}`);

      return filtrarPokemonBD(resultado.dataValues);
    } catch (error) {
      throw error;
    }
  } else {
    const url = "https://pokeapi.co/api/v2/pokemon/" + id;

    try {
      const response = await axios.get(url);
      const pokemonData = response.data;

      return filtrarPokemonApi(pokemonData, "Detail");
    } catch (error) {
      throw Error(`No se encontro el pokemon con id ${id}`);
    }
  }
};

const buscarNombrePokemon = async (name) => {
  const resultado = await pokemon.findAll({
    where: { Nombre: name },
    include: [
      {
        model: type,
        attributes: ["Nombre"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  if (resultado.length > 0) return filtrarPokemonBD(resultado[0].dataValues);
  else {
    const url = "https://pokeapi.co/api/v2/pokemon/" + name;

    try {
      const response = await axios.get(url);
      const pokemonData = response.data;
      const objetoPokemon = filtrarPokemonApi(pokemonData);
      const arrayPoke = []
      arrayPoke.push(objetoPokemon)
      return arrayPoke
    } catch (error) {
      throw Error(`No se encontro el pokemon con Nombre ${name}`);
    }
  }
};

const traerTipos = async () => {
  const resultados = await type.findAll();
  return resultados;
};

const crearPokemon = async (
  Nombre,
  Vida,
  Ataque,
  Defensa,
  Velocidad,
  Altura,
  Peso,
  Tipo
) => {
  if (!Nombre) throw Error("El pokemon debe tener un nombre");
  if (Ataque === "") Ataque = null;
  if (Vida === "") Vida = null;
  if (Defensa === "") Defensa = null;
  if (Velocidad === "") Velocidad = null;
  if (Altura === "") Altura = null;
  if (Peso === "") Peso = null;

  let resultados = await pokemon.findAll({
    where: {
      Nombre: Nombre,
    },
  });

  if (resultados.length != 0)
    throw new Error("Ya existe un pokemon con ese nombre");
  else {
    const url = "https://pokeapi.co/api/v2/pokemon/" + Nombre;

    try {
      const response = await axios.get(url);
      resultados = response.data;
    } catch (error) {
      resultados = error;
    }
  }

  if (resultados["id"]) throw new Error("Ya existe un pokemon con ese nombre");

  const nuevoId = "C" + idCreados;
  idCreados++;

  const newPokemon = await pokemon.create({
    ID: nuevoId,
    Nombre,
    Vida,
    Ataque,
    Defensa,
    Velocidad,
    Altura,
    Peso,
  });

  await Promise.all(
    Tipo.map(async (tipo) => {
      const [encontrado] = await type.findOrCreate({
        where: {
          Nombre: tipo,
        },
      });
      await newPokemon.addType(encontrado);
    })
  );

  return { ...newPokemon.dataValues, Tipo };
};

module.exports = {
  getPokemons,
  buscarNombrePokemon,
  buscarPokemon,
  traerTipos,
  crearPokemon,
  traerPokemonsApi,
};
