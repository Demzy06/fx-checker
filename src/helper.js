export function getDataFromLocalStorge(itemName) {
  const item = localStorage.getItem(itemName);
  return item && JSON.parse(item);
}