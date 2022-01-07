import CellarActionTypes from "./cellar.types";
import {
  addItemToCellar,
  removeItemFromCellar,
  editItemFromCellar,
  incrementItemQuantity,
  decrementItemQuantity,
  setItemNotes,
} from "./cellar.utils";

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

    case CellarActionTypes.EDIT_ITEM:
      cellarItems = editItemFromCellar(state.cellarItems, action.payload);
      localStorage.setItem("cellarItems", JSON.stringify(cellarItems));
      return {
        ...state,
        cellarItems: cellarItems,
      };
    case CellarActionTypes.INCREMENT_ITEM_QUANTITY:
      cellarItems = incrementItemQuantity(state.cellarItems, action.payload);
      localStorage.setItem("cellarItems", JSON.stringify(cellarItems));
      return {
        ...state,
        cellarItems: cellarItems,
      };
    case CellarActionTypes.DECREMENT_ITEM_QUANTITY:
      cellarItems = decrementItemQuantity(state.cellarItems, action.payload);
      localStorage.setItem("cellarItems", JSON.stringify(cellarItems));
      return {
        ...state,
        cellarItems: cellarItems,
      };
    case CellarActionTypes.SET_ITEM_NOTES:
      cellarItems = setItemNotes(state.cellarItems, action.payload);
      localStorage.setItem("cellarItems", JSON.stringify(cellarItems));
      return {
        ...state,
        cellarItems: cellarItems,
      };
    case CellarActionTypes.SET_CELLAR_ITEMS:
      localStorage.setItem("cellarItems", JSON.stringify(action.payload));
      return {
        ...state,
        cellarItems: action.payload,
      };
    default:
      return state;
  }
};

export default cellarReducer;
