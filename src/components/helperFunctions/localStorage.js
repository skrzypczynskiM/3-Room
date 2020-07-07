export const saveTodoData = (typeOfRoom, itemName, payload) => {
  const res = JSON.parse(localStorage.getItem(typeOfRoom)) || {};
  res[itemName] = payload;
  localStorage.setItem(typeOfRoom, JSON.stringify(res));
};
