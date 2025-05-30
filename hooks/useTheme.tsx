// context/ThemeProvider.tsx
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import {
  Provider as PaperProvider,
  MD3Theme as PaperTheme,
} from "react-native-paper";
import { useColorScheme } from "react-native";

import * as lightTheme from "../theme/pallet/Light";
import * as darkTheme from "../theme/pallet/Dark";
import { settingsDbService } from "../service/settingsDbService";

// Tipos
export type ThemeKey = "green" | "pink" | "red" | "yellow" | "purple" | "mint" | "lilac";

const themeMap: Record<"light" | "dark", Record<ThemeKey, PaperTheme>> = {
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

interface ThemeContextProps {
  currentTheme: PaperTheme;
  currentThemeKey: ThemeKey;
  changeTheme: (themeKey: ThemeKey) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: lightTheme.greenPastelLightTheme,
  currentThemeKey: "green",
  changeTheme: () => {},
});

const isValidThemeKey = (key: any): key is ThemeKey =>
  Object.keys(themeMap.light).includes(key);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const colorScheme = systemColorScheme === "dark" ? "dark" : "light";

  const [currentThemeKey, setCurrentThemeKey] = useState<ThemeKey>("green");

  useEffect(() => {
    (async () => {
      const storedKey = await settingsDbService.getThemeKey();
      if (storedKey && isValidThemeKey(storedKey)) {
        setCurrentThemeKey(storedKey);
      }
    })();
  }, []);

  const changeTheme = (themeKey: ThemeKey) => {
    setCurrentThemeKey(themeKey);
    settingsDbService.saveThemeKey(themeKey);
  };

  const currentTheme = themeMap[colorScheme][currentThemeKey];

  return (
    <ThemeContext.Provider value={{ currentTheme, currentThemeKey, changeTheme }}>
      <PaperProvider theme={currentTheme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};
