// hooks/useItems.ts
import { useEffect, useState, useCallback } from 'react';
import { itemService } from '../service/itemsDbService'; // ajuste o caminho conforme seu projeto
import Item from '../interface/Item';

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const loadItems = useCallback(async () => {
    setLoading(true);
    try {
      const docs = await itemService.getAll();
      setItems(docs);
    } catch (error) {
      console.error('Erro ao carregar itens:', error);
    }
    setLoading(false);
  }, []);

  // Para adicionar: omitimos só o id (gerado dentro do service) e criamos com todos os campos exceto id
  const addItem = async (item: Omit<Item, 'id'>) => {
    await itemService.add(item);
    await loadItems();
  };

  const updateItem = async (updated: Item) => {
    try {
      await itemService.update(updated);
      await loadItems();
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  const removeItem = async (id: string) => {
    try {
      await itemService.remove(id);
      await loadItems();
    } catch (error) {
      console.error('Erro ao remover item:', error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return {
    items,
    loading,
    addItem,
    updateItem,
    removeItem,
    reload: loadItems,
  };
}
