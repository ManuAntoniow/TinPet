export const SELECTED_DOG = "SELEC_DOG";
export const FILTERED_DOG = "FILTERED_DOG";

export const selectDog = (id) => ({
  type: SELECTED_DOG,
  breadID: id,
});

export const filteredDog = (id) => ({
  type: FILTERED_DOG,
  categoryID: id,
});