import { v4 as uuidv4 } from "uuid";

export const addItemToCellar = (cellarItems, itemToAdd) => {
  const isItemAlreadyInCellar = cellarItems.find(
    (item) =>
      item.name === itemToAdd.name &&
      item.brand === itemToAdd.brand &&
      item.year === itemToAdd.year
  );

  if (isItemAlreadyInCellar) {
    //Throw erro porque ja existe
    console.log("item already exists");
    return cellarItems;
  }

  return [...cellarItems, { ...itemToAdd, id: uuidv4() }];
};

export const removeItemFromCellar = (cellarItems, itemToRemove) => {
  const isItemAlreadyInCellar = cellarItems.find(
    (item) => item.id === itemToRemove.id
  );

  if (isItemAlreadyInCellar) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  console.log("error, item not found");
};
