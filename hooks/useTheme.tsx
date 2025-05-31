// useTheme.tsx
import { create } from 'zustand';
import { persist, PersistOptions, PersistStorage } from 'zustand/middleware';
import { useColorScheme, Appearance } from 'react-native';
import { PaperProvider, MD3Theme as PaperTheme } from 'react-native-paper';
import { ReactNode, useEffect, useState } from 'react';

import * as lightTheme from '../theme/pallet/Light';
import * as darkTheme from '../theme/pallet/Dark';
import { themeStore } from './store';

export type ThemeKey = 'green' | 'pink' | 'red' | 'yellow' | 'purple' | 'mint' | 'lilac';

const themeMap: Record<'light' | 'dark', Record<ThemeKey, PaperTheme>> = {
  light: {
    green: lightTheme.greenPastelLightTheme,
    pink: lightTheme.pinkPastelLightTheme,
    red: lightTheme.redPastelLightTheme,
    yellow: lightTheme.yellowPastelLightTheme,
    purple: lightTheme.purplePastelLightTheme,
    mint: lightTheme.mintPastelLightTheme,
    lilac: lightTheme.lilacPastelLightTheme,
  },
  dark: {
    green: darkTheme.greenPastelDarkTheme,
    pink: darkTheme.pinkPastelDarkTheme,
    red: darkTheme.redPastelDarkTheme,
    yellow: darkTheme.yellowPastelDarkTheme,
    purple: darkTheme.purplePastelDarkTheme,
    mint: darkTheme.mintPastelDarkTheme,
    lilac: darkTheme.lilacPastelDarkTheme,
  },
};

interface ThemeState {
  themeKey: ThemeKey;
  setThemeKey: (key: ThemeKey) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeKey: 'green',
      setThemeKey: (key) => set({ themeKey: key }),
    }),
    {
      name: 'theme-storage',
      storage: themeStore,
    } as unknown as PersistOptions<ThemeState>
  )
);

/**
 * Hook para acessar o tema atual e alterar o tema.
 * Retorna:
 *  - theme: tema do react-native-paper baseado no esquema e tema selecionado
 *  - themeKey: chave do tema (green, pink, ...)
 *  - setThemeKey: função para alterar o tema
 */
export function useTheme() {
  const themeKey = useThemeStore((state) => state.themeKey);
  const setThemeKey = useThemeStore((state) => state.setThemeKey);

  const systemScheme = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light'; // pode ser 'light' | 'dark'
  // const systemScheme = 'dark'; // pode ser 'light' | 'dark'

  // monta o tema baseado no esquema e tema escolhido
  const theme = themeMap[systemScheme][themeKey];
  console.warn(Appearance.getColorScheme())
  console.log(systemScheme);

  return { theme, themeKey, setThemeKey };
}

/**
 * Componente para prover o PaperProvider com o tema correto
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

/**
 * Para casos não-React (ex: código fora de componentes)
 * Retorna o tema atual síncrono baseado no estado e esquema do sistema
 */
export const getCurrentTheme = (): PaperTheme => {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const key = useThemeStore.getState().themeKey;
  return themeMap[scheme][key];
};
