let items: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

export const getItems = () => items;
export const getItemById = (id: number) => items.find((item) => item.id === id);
export const addItem = (item: Item) => {
  items.push(item);
  return item;
};
export const updateItem = (id: number, updatedItem: Item) => {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index] = updatedItem;
    return updatedItem;
  }
  return null;
};
export const deleteItem = (id: number) => {
  items = items.filter((item) => item.id !== id);
};
