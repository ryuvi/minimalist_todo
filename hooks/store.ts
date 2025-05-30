import AsyncStorage from '@react-native-async-storage/async-storage';
import type { StateStorage } from 'zustand/middleware';

export const itemsStore: StateStorage = {
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return JSON.parse(value as string) ?? null;
  },
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, JSON.stringify(value)); // value já é string aqui
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name);
  },
};

export const themeStore: StateStorage = {
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return JSON.parse(value as string) ?? null;
  },
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, JSON.stringify(value)); // value já é string aqui
  },
  removeItem: async () => {}
}
