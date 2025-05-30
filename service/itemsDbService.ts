// services/itemService.ts
import uuid from 'react-native-uuid';
import Item from '../interface/Item';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ITEMS_KEY = 'items';


function parseItems(): Item[] {
  const json = AsyncStorage.getItem(ITEMS_KEY);
  if (!json) return [];
  try {
    const rawItems = JSON.parse(json) as any[];
    // Converter strings para objetos Date
    return rawItems.map(item => ({
      ...item,
      createdAt: new Date(item.createdAt),
      dueDate: new Date(item.dueDate),
    }));
  } catch {
    return [];
  }
}

function saveItems(items: Item[]) {
  AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(items));
}

export const itemService = {
  async getAll(): Promise<Item[]> {
    return parseItems();
  },

  async add(item: Omit<Item, 'id'>): Promise<void> {
    const items = parseItems();
    const newItem: Item = {
      ...item,
      id: uuid.v4(),
      createdAt: item.createdAt || new Date(),
      dueDate: item.dueDate,
    };
    items.push(newItem);
    saveItems(items);
  },

  async update(updatedItem: Item): Promise<void> {
    const items = parseItems();
    const index = items.findIndex(i => i.id === updatedItem.id);
    if (index >= 0) {
      items[index] = updatedItem;
      saveItems(items);
    }
  },

  async remove(id: string): Promise<void> {
    const items = parseItems();
    const filtered = items.filter(i => i.id !== id);
    saveItems(filtered);
  },
};
