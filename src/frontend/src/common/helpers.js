import { DOUGHS, SIZES, SAUCES, INGREDIENTS } from "./constants";

export const normalizeDough = (array) => {
  const doughArray = array.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.image,
      description: item.description,
      price: item.price,
      value: DOUGHS[item.name].name,
    };
  });

  return doughArray;
};

export const normalizeSize = (array) => {
  const sizeArray = array.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.image,
      multiplier: item.multiplier,
      value: SIZES[item.id].name,
    };
  });

  return sizeArray;
};

export const normalizeSauce = (array) => {
  const sauceArray = array.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      value: SAUCES[item.name].name,
    };
  });

  return sauceArray;
};

export const normalizeIngredient = (array) => {
  const ingredientArray = array.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      value: INGREDIENTS[item.name].name,
      count: 0,
    };
  });

  return ingredientArray;
};
