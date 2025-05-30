import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import {zustandStorage} from "../hooks/store"; // 👈 import novo

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  tag: string;
  priority: number;
  createdAt: string;
  dueDate: string;
}

interface TodosState {
  todos: Todo[];
  addTodo: (
    todo: Omit<Todo, "id" | "createdAt" | "completed"> & { dueDate: string }
  ) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

type TodosPersist = PersistOptions<TodosState>;

export const useTodosStore = create<TodosState>()(
  persist<TodosState>(
    (set, get) => ({
      todos: [],
      addTodo: (todo) => {
        const newTodo: Todo = {
          id: Date.now().toString(),
          completed: false,
          createdAt: new Date().toISOString(),
          ...todo,
        };
        set({ todos: [...get().todos, newTodo] });
      },
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      toggleTodo: (id) => {
        const updated = get().todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        set({ todos: updated });
      },
    }),
    {
      name: "todos-storage",
      storage: zustandStorage, // 👈 aqui
    } as unknown as PersistOptions<TodosState>
  )
);
