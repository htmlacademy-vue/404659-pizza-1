import { DOUGHS, SIZES, SAUCES } from "./constants";

export const normalizeDough = (array) => {
  const doughArray = array.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.image,
      description: item.description,
      price: item.price,
      value: DOUGHS[item.name].name,
      checked: DOUGHS[item.name].checked,
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
      value: SIZES[item.id].name,
      checked: SIZES[item.id].checked,
    };
  });

  return sizeArray;
};

export const normalizeSauce = (array) => {
  const sizeArray = array.map((item) => {
    return {
      id: item.id,
      name: item.name,
      value: SAUCES[item.name].name,
      checked: SAUCES[item.name].checked,
    };
  });

  return sizeArray;
};
