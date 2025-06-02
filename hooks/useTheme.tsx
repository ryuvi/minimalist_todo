// useTheme.tsx
import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { PaperProvider, MD3Theme as PaperTheme } from 'react-native-paper';
import { ReactNode } from 'react';

import * as pastelTheme from '../theme/pastel'; // Pasta com todos os temas
import * as jewels from '../theme/jewels'
import * as dark from '../theme/dark';
import { themeStore } from './store';

export type ThemeKey =
  | 'pink' | 'yellow' | 'mint' | 'lilac' | 'peach' // somente light
  | 'ruby' | 'sapphire' | 'emerald' | 'amethyst' | 'pearl' | 'topaz'
  | 'cyberpunk' | 'dracula' | 'synthwave' | 'neonTokyo' | 'vividRed' | 'redBlack'

// 🎨 Mapeamento direto dos temas
export const themeMap: Record<ThemeKey, PaperTheme> = {
  pink: pastelTheme.pinkPastel,
  yellow: pastelTheme.yellowPastel,
  mint: pastelTheme.mintPastel,
  lilac: pastelTheme.lilacPastel,
  peach: pastelTheme.peachPastel,

  ruby: jewels.ruby,
  sapphire: jewels.sapphire,
  emerald: jewels.emerald,
  amethyst: jewels.amethyst,
  pearl: jewels.pearl,
  topaz: jewels.topaz,

  cyberpunk: dark.cyberpunk,
  dracula: dark.dracula,
  synthwave: dark.synthwave,
  neonTokyo: dark.neonTokyo,
  vividRed: dark.vividRed,
  redBlack: dark.redBlack
};

interface ThemeState {
  themeKey: ThemeKey;
  setThemeKey: (key: ThemeKey) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeKey: 'mint',
      setThemeKey: (key) => set({ themeKey: key }),
    }),
    {
      name: 'theme-storage',
      storage: themeStore,
    } as unknown as PersistOptions<ThemeState>
  )
);

export function useTheme() {
  const themeKey = useThemeStore((state) => state.themeKey);
  const setThemeKey = useThemeStore((state) => state.setThemeKey);

  const theme = themeMap[themeKey];
  return { theme, themeKey, setThemeKey };
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

// Para acessar fora de React
export const getCurrentTheme = (): PaperTheme => {
  const key = useThemeStore.getState().themeKey;
  return themeMap[key];
};
