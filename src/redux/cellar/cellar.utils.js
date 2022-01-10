import { v4 as uuidv4 } from "uuid";

export const addItemToCellar = (cellarItems, itemToAdd) => {
  const isItemAlreadyInCellar = cellarItems.find(
    (item) =>
      item.name === itemToAdd.name &&
      item.brand === itemToAdd.brand &&
      item.year === itemToAdd.year
  );

  if (isItemAlreadyInCellar) {
    //Throw error because item already exists in cellar
    console.error("Item already exists");
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

  console.error("Error, item not found");
};

export const removeItemFromCellar = (cellarItems, itemToRemove) => {
  const isItemInCellar = cellarItems.find(
    (item) => item.id === itemToRemove.id
  );

  if (isItemInCellar) {
    return cellarItems.filter((item) => item.id !== itemToRemove.id);
  }

  console.error("Error, item not found");
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

  console.error("Item not found");
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

  console.error("Item not found");
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

  console.error("Item not found");
};
