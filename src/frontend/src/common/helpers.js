import { DOUGHS } from "./constants";

export const normalizeDough = (array) => {
  console.log(array);
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
