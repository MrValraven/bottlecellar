import CellarActionTypes from "./cellar.types";
import { addItemToCellar, removeItemFromCellar } from "./cellar.utils";

const INITIAL_STATE = {
  cellarItems: [],
};

const cellarReducer = (state = INITIAL_STATE, action) => {
  let cellarItems = [];
  switch (action.type) {
    case CellarActionTypes.ADD_ITEM:
      cellarItems = addItemToCellar(state.cellarItems, action.payload);
      localStorage.setItem("cellarItems", JSON.stringify(cellarItems));
      return {
        ...state,
        cellarItems: cellarItems,
      };
    case CellarActionTypes.REMOVE_ITEM:
      cellarItems = removeItemFromCellar(state.cellarItems, action.payload);
      localStorage.setItem("cellarItems", JSON.stringify(cellarItems));
      return {
        ...state,
        cellarItems: cellarItems,
      };
    case CellarActionTypes.SET_CELLAR_ITEMS:
      return {
        ...state,
        cellarItems: action.payload,
      };
    default:
      return state;
  }
};

export default cellarReducer;
