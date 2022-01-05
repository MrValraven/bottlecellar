import CellarActionTypes from "./cellar.types";
import { addItemToCellar, removeItemFromCellar } from "./cellar.utils";

export const INITIAL_STATE = {
  cellarItems: [],
};

const cellarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CellarActionTypes.ADD_ITEM:
      return {
        ...state,
        cellarItems: addItemToCellar(state.cellarItems, action.payload),
      };
    case CellarActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cellarItems: removeItemFromCellar(state.cellarItems, action.payload),
      };
    default:
      return state;
  }
};

export default cellarReducer;
