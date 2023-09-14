import axios from "axios";
import {
  GET_POKEMONS,
  RESET_PAGED,
  GET_POKEMON_DETAIL,
  GET_POKEMON_NAME,
} from "./action_types";

export const getPokemons = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:8001/pokemons");
    return dispatch({ type: GET_POKEMONS, payload: response.data });
  };
};

export const getPokemonDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:8001/pokemons/${id}`);
    return dispatch({ type: GET_POKEMON_DETAIL, payload: response.data });
  };
};

export const getPokemonName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:8001/pokemons?name=${name}`
    );
    return dispatch({ type: GET_POKEMON_NAME, payload: response.data });
  };
};

export const resedPaged = (payload) => {
  return function (dispatch) {
    dispatch({ type: RESET_PAGED, payload });
  };
};
