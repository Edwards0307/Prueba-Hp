import { GET_POKEMONS, RESET_PAGED } from "./action_types";

const initialState = {
  pokemons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
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
