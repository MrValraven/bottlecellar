import CellarActionTypes from "./cellar.types";

export const addItem = (item) => ({
  type: CellarActionTypes.ADD_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: CellarActionTypes.REMOVE_ITEM,
  payload: item,
});
export const setCellarItems = (cellarItems) => ({
  type: CellarActionTypes.SET_CELLAR_ITEMS,
  payload: cellarItems,
});
