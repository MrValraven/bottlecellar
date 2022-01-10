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

  return [...cellarItems, { ...itemToAdd, id: uuidv4(), notes: [] }];
};

export const editItemFromCellar = (cellarItems, itemToEdit) => {
  const isItemInCellar = cellarItems.find((item) => item.id === itemToEdit.id);

  if (isItemInCellar) {
    return cellarItems.map((cellarItem) =>
      cellarItem.id === itemToEdit.id
        ? {
            ...cellarItem,
            name: itemToEdit.name,
            brand: itemToEdit.brand,
            year: itemToEdit.year,
            rating: itemToEdit.rating,
            price: itemToEdit.price,
            quantity: itemToEdit.quantity,
          }
        : cellarItem
    );
  }

  console.log("Error, item doesn't exist");
};

export const removeItemFromCellar = (cellarItems, itemToRemove) => {
  const isItemInCellar = cellarItems.find(
    (item) => item.id === itemToRemove.id
  );

  if (isItemInCellar) {
    return cellarItems.filter((item) => item.id !== itemToRemove.id);
  }

  console.log("error, item not found");
};

export const incrementItemQuantity = (cellarItems, itemToModify) => {
  const isItemInCellar = cellarItems.find(
    (item) => item.id === itemToModify.id
  );

  if (isItemInCellar) {
    return cellarItems.map((cellarItem) =>
      cellarItem.id === itemToModify.id
        ? {
            ...cellarItem,
            quantity: itemToModify.quantity + 1,
          }
        : cellarItem
    );
  }

  console.log("Item doesn't exist");
};
export const decrementItemQuantity = (cellarItems, itemToModify) => {
  const isItemInCellar = cellarItems.find(
    (item) => item.id === itemToModify.id
  );

  if (isItemInCellar.quantity === 0) {
    return cellarItems;
  }

  if (isItemInCellar) {
    return cellarItems.map((cellarItem) =>
      cellarItem.id === itemToModify.id
        ? {
            ...cellarItem,
            quantity: itemToModify.quantity - 1,
          }
        : cellarItem
    );
  }

  console.log("Item doesn't exist");
};

export const setItemNotes = (cellarItems, itemToModify) => {
  const isItemInCellar = cellarItems.find(
    (item) => item.id === itemToModify.id
  );

  if (isItemInCellar) {
    return cellarItems.map((cellarItem) =>
      cellarItem.id === itemToModify.id
        ? {
            ...cellarItem,
            notes: itemToModify.notes,
          }
        : cellarItem
    );
  }

  console.log("Item doesn't exist");
};
