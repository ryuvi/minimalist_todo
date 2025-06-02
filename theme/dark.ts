import { MD3DarkTheme } from 'react-native-paper';
import { createTheme } from './utils'; // ajuste o path conforme seu projeto

export const cyberpunk = createTheme({
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#FF00FF",
    onPrimary: "#000000",
    primaryContainer: "#3D003D",
    onPrimaryContainer: "#FFCCFF",

    secondary: "#00FFF7",
    onSecondary: "#001F1E",
    secondaryContainer: "#003F3D",
    onSecondaryContainer: "#A0FFFF",

    tertiary: "#FFFF00",
    onTertiary: "#332900",
    tertiaryContainer: "#665C00",
    onTertiaryContainer: "#FFF8B3",

    background: "#0F0F0F",
    onBackground: "#F5F5F5",

    surface: "#1A1A1A",
    onSurface: "#F5F5F5",

    surfaceVariant: "#2E2E2E",
    onSurfaceVariant: "#CCCCCC",

    outline: "#FF00FF",
    outlineVariant: "#990099",

    surfaceTint: "#FF00FF",
    inverseSurface: "#F5F5F5",
    inverseOnSurface: "#0F0F0F",
    inversePrimary: "#FFCCFF",
  },
});

export const dracula = createTheme({
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#FF79C6",
    onPrimary: "#1A1A1A",
    primaryContainer: "#8A3C74",
    onPrimaryContainer: "#FFD6EF",

    secondary: "#BD93F9",
    onSecondary: "#1A1A1A",
    secondaryContainer: "#5E4B8B",
    onSecondaryContainer: "#E0D8FF",

    tertiary: "#50FA7B",
    onTertiary: "#001F0F",
    tertiaryContainer: "#3E8F57",
    onTertiaryContainer: "#D0FFE1",

    background: "#282A36",
    onBackground: "#F8F8F2",

    surface: "#1E1F29",
    onSurface: "#F8F8F2",

    surfaceVariant: "#44475A",
    onSurfaceVariant: "#CFCFE2",

    outline: "#6272A4",
    outlineVariant: "#BD93F9",

    surfaceTint: "#FF79C6",
    inverseSurface: "#F8F8F2",
    inverseOnSurface: "#282A36",
    inversePrimary: "#FFB3DE",
  },
});

export const synthwave = createTheme({
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#FF6EC7",
    onPrimary: "#000000",
    primaryContainer: "#7A004F",
    onPrimaryContainer: "#FFD0EC",

    secondary: "#00E5FF",
    onSecondary: "#002B33",
    secondaryContainer: "#004C5A",
    onSecondaryContainer: "#B0F7FF",

    tertiary: "#FFD700",
    onTertiary: "#332B00",
    tertiaryContainer: "#665E00",
    onTertiaryContainer: "#FFF3B0",

    background: "#1A001F",
    onBackground: "#F5F5F5",

    surface: "#220033",
    onSurface: "#F5F5F5",

    surfaceVariant: "#3C003C",
    onSurfaceVariant: "#FFD0EC",

    outline: "#FF6EC7",
    outlineVariant: "#B3007A",

    surfaceTint: "#FF6EC7",
    inverseSurface: "#F5F5F5",
    inverseOnSurface: "#1A001F",
    inversePrimary: "#FFC1E9",
  },
});

export const neonTokyo = createTheme({
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#FF3CAC",
    onPrimary: "#1A001A",
    primaryContainer: "#66004C",
    onPrimaryContainer: "#FFD0E8",

    secondary: "#784BA0",
    onSecondary: "#1A1A2E",
    secondaryContainer: "#4A2F6B",
    onSecondaryContainer: "#DCCEFF",

    tertiary: "#2B86C5",
    onTertiary: "#001F33",
    tertiaryContainer: "#004C7A",
    onTertiaryContainer: "#C0E7FF",

    background: "#0A0A0F",
    onBackground: "#F0F0F5",

    surface: "#14141F",
    onSurface: "#F0F0F5",

    surfaceVariant: "#292941",
    onSurfaceVariant: "#B8B8D1",

    outline: "#A6006D",
    outlineVariant: "#4D0040",

    surfaceTint: "#FF3CAC",
    inverseSurface: "#F0F0F5",
    inverseOnSurface: "#0A0A0F",
    inversePrimary: "#FFD0E8",
  },
});

export const vividRed = createTheme({
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#FF6659",
    onPrimary: "#300000",
    primaryContainer: "#8E0000",
    onPrimaryContainer: "#FFDAD6",

    secondary: "#F06292",
    onSecondary: "#3C001B",
    secondaryContainer: "#880E4F",
    onSecondaryContainer: "#FFD8E4",

    tertiary: "#EF5350",
    onTertiary: "#330000",
    tertiaryContainer: "#7A0000",
    onTertiaryContainer: "#FFD8D8",

    background: "#121212",
    onBackground: "#FFFFFF",

    surface: "#121212",
    onSurface: "#FFFFFF",

    surfaceVariant: "#2A2A2A",
    onSurfaceVariant: "#E5E5E5",

    outline: "#FF6659",
    outlineVariant: "#C88787",

    surfaceTint: "#FF6659",
    inverseSurface: "#FFFFFF",
    inverseOnSurface: "#121212",
    inversePrimary: "#FFABA6",
  },
});

export const redBlack = createTheme({
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#FF5252",
    onPrimary: "#370000",
    primaryContainer: "#7A0000",
    onPrimaryContainer: "#FFD7D7",

    secondary: "#000000",
    onSecondary: "#FFEBEE",
    secondaryContainer: "#1C1C1C",
    onSecondaryContainer: "#FFFFFF",

    tertiary: "#9A0007",
    onTertiary: "#FFDADA",
    tertiaryContainer: "#3C0000",
    onTertiaryContainer: "#FFB3B3",

    background: "#0D0D0D",
    onBackground: "#FFFFFF",

    surface: "#121212",
    onSurface: "#FFFFFF",

    surfaceVariant: "#2B2B2B",
    onSurfaceVariant: "#E0E0E0",

    outline: "#FF5252",
    outlineVariant: "#C98484",

    surfaceTint: "#FF5252",
    inverseSurface: "#FFFFFF",
    inverseOnSurface: "#0D0D0D",
    inversePrimary: "#FF8A80",
  },
});
