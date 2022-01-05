import CellarActionTypes from "./cellar.types";

export const addItem = (item) => ({
  type: CellarActionTypes.ADD_BOTTLE,
  payload: item,
});
export const removeItem = (item) => ({
  type: CellarActionTypes.REMOVE_BOTTLE,
  payload: item,
});
