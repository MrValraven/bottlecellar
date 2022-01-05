export const addItemToCellar = (cellarItems, itemToAdd) => {
  const isItemAlreadyInCellar = cellarItems.find(
    (item) => item.id === itemToAdd.id
  );

  if (isItemAlreadyInCellar) {
    //Throw erro porque ja existe
    console.log("item already exists");
  }

  return [...cellarItems, itemToAdd];
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
