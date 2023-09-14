import {
  GET_POKEMONS,
  RESET_PAGED,
  GET_POKEMON_DETAIL,
  GET_POKEMON_NAME,
} from "./action_types";

const initialState = {
  pokemons: [],
  currentPage: 1,
  pokemonDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case GET_POKEMON_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case RESET_PAGED:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
