import axios from "axios"
import { GET_POKEMONS, RESET_PAGED } from "./action_types"

export const getPokemons = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:8001/pokemons");

    return dispatch({ type: GET_POKEMONS, payload: response.data });
  };
};

export const resedPaged = (payload) => {
  return function (dispatch) {
    dispatch({ type: RESET_PAGED, payload });
  };
};