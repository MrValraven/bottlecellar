import { v4 as uuidv4 } from "uuid";

export const addItemToCellar = (cellarItems, itemToAdd) => {
  let newCellarItems = cellarItems;

  if (cellarItems === null) {
    newCellarItems = [];
  }
  const isItemAlreadyInCellar = cellarItems.find(
    (item) =>
      item.name === itemToAdd.name &&
      item.brand === itemToAdd.brand &&
      item.year === itemToAdd.year
  );

  if (!isItemAlreadyInCellar) {
    newCellarItems = [
      ...cellarItems,
      { ...itemToAdd, id: uuidv4(), notes: [] },
    ];
  }

  localStorage.setItem("cellarItems", JSON.stringify(newCellarItems));

  return newCellarItems;
};

export const editItemFromCellar = (cellarItems, itemToEdit) => {
  let newCellarItems = cellarItems;

  const isItemInCellar = cellarItems.find((item) => item.id === itemToEdit.id);

  if (isItemInCellar) {
    newCellarItems = cellarItems.map((cellarItem) =>
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

    localStorage.setItem("cellarItems", JSON.stringify(newCellarItems));
  }

  return newCellarItems;
};

export const removeItemFromCellar = (cellarItems, itemToRemove) => {
  const newCellarItems = cellarItems.filter(
    (item) => item.id !== itemToRemove.id
  );

  localStorage.setItem("cellarItems", JSON.stringify(newCellarItems));

  return newCellarItems;
};

export const incrementItemQuantity = (cellarItems, itemToModify) => {
  let newCellarItems = cellarItems;

  const isItemInCellar = cellarItems.find(
    (item) => item.id === itemToModify.id
  );

  if (isItemInCellar) {
    newCellarItems = cellarItems.map((cellarItem) =>
      cellarItem.id === itemToModify.id
        ? {
            ...cellarItem,
            quantity: itemToModify.quantity + 1,
          }
        : cellarItem
    );

    localStorage.setItem("cellarItems", JSON.stringify(newCellarItems));
  }

  return newCellarItems;
};
export const decrementItemQuantity = (cellarItems, itemToModify) => {
  let newCellarItems = cellarItems;

  const isItemInCellar = cellarItems.find(
    (item) => item.id === itemToModify.id
  );

  if (isItemInCellar.quantity === 0) {
    return newCellarItems;
  }

  if (isItemInCellar) {
    newCellarItems = cellarItems.map((cellarItem) =>
      cellarItem.id === itemToModify.id
        ? {
            ...cellarItem,
            quantity: itemToModify.quantity - 1,
          }
        : cellarItem
    );

    localStorage.setItem("cellarItems", JSON.stringify(newCellarItems));
  }

  return newCellarItems;
};

export const setItemNotes = (cellarItems, itemToModify) => {
  let newCellarItems = cellarItems;

  const isItemInCellar = cellarItems.find(
    (item) => item.id === itemToModify.id
  );

  if (isItemInCellar) {
    newCellarItems = cellarItems.map((cellarItem) =>
      cellarItem.id === itemToModify.id
        ? {
            ...cellarItem,
            notes: itemToModify.notes,
          }
        : cellarItem
    );

    localStorage.setItem("cellarItems", JSON.stringify(newCellarItems));
  }

  return newCellarItems;
};

export const setCellarItems = (cellarItems) => {
  localStorage.setItem("cellarItems", JSON.stringify(cellarItems));

  return cellarItems;
};
