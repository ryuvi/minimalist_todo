import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { createTheme } from "./utils"; // ajuste o path conforme necessário

export const ruby = createTheme({
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#D32F2F",
    onPrimary: "#FFFFFF",
    primaryContainer: "#B71C1C",
    onPrimaryContainer: "#FFDAD6",

    secondary: "#880E4F",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#560027",
    onSecondaryContainer: "#FFD9EC",

    tertiary: "#C2185B",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#880E4F",
    onTertiaryContainer: "#FFD6EC",

    background: "#121212",
    onBackground: "#F5F5F5",

    surface: "#1C1C1C",
    onSurface: "#F5F5F5",

    surfaceVariant: "#2D2D2D",
    onSurfaceVariant: "#E0E0E0",

    outline: "#F44336",
    outlineVariant: "#D32F2F",

    surfaceTint: "#D32F2F",
    inverseSurface: "#F5F5F5",
    inverseOnSurface: "#121212",
    inversePrimary: "#FFCDD2",
  },
});

export const sapphire = createTheme({
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#1976D2",
    onPrimary: "#FFFFFF",
    primaryContainer: "#0D47A1",
    onPrimaryContainer: "#DDEEFF",

    secondary: "#1565C0",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#003C8F",
    onSecondaryContainer: "#B3D9FF",

    tertiary: "#82B1FF",
    onTertiary: "#000D3B",
    tertiaryContainer: "#001E63",
    onTertiaryContainer: "#DAE9FF",

    background: "#0A0E1A",
    onBackground: "#E3F2FD",

    surface: "#121F2C",
    onSurface: "#E3F2FD",

    surfaceVariant: "#1E2A38",
    onSurfaceVariant: "#AABCCD",

    outline: "#64B5F6",
    outlineVariant: "#0D47A1",

    surfaceTint: "#1976D2",
    inverseSurface: "#E3F2FD",
    inverseOnSurface: "#0A0E1A",
    inversePrimary: "#90CAF9",
  },
});

export const emerald = createTheme({
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#2E7D32",
    onPrimary: "#FFFFFF",
    primaryContainer: "#1B5E20",
    onPrimaryContainer: "#C8E6C9",

    secondary: "#388E3C",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#004D40",
    onSecondaryContainer: "#B2DFDB",

    tertiary: "#66BB6A",
    onTertiary: "#003300",
    tertiaryContainer: "#004D00",
    onTertiaryContainer: "#CCFFCC",

    background: "#101E12",
    onBackground: "#E8F5E9",

    surface: "#1B2E1D",
    onSurface: "#E8F5E9",

    surfaceVariant: "#2A3D2B",
    onSurfaceVariant: "#A5D6A7",

    outline: "#81C784",
    outlineVariant: "#2E7D32",

    surfaceTint: "#2E7D32",
    inverseSurface: "#E8F5E9",
    inverseOnSurface: "#101E12",
    inversePrimary: "#A5D6A7",
  },
});

export const amethyst = createTheme({
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#9C27B0",
    onPrimary: "#FFFFFF",
    primaryContainer: "#6A1B9A",
    onPrimaryContainer: "#F3E5F5",

    secondary: "#7B1FA2",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#4A0072",
    onSecondaryContainer: "#E1BEE7",

    tertiary: "#BA68C8",
    onTertiary: "#3A003A",
    tertiaryContainer: "#6A1B9A",
    onTertiaryContainer: "#F8EAFB",

    background: "#140015",
    onBackground: "#F8EAFB",

    surface: "#1E0022",
    onSurface: "#F8EAFB",

    surfaceVariant: "#320038",
    onSurfaceVariant: "#E1BEE7",

    outline: "#CE93D8",
    outlineVariant: "#7B1FA2",

    surfaceTint: "#9C27B0",
    inverseSurface: "#F8EAFB",
    inverseOnSurface: "#140015",
    inversePrimary: "#E1BEE7",
  },
});

export const pearl = createTheme({
  ...MD3DarkTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#F8F8F2",
    onPrimary: "#000000",
    primaryContainer: "#FFFFFF",
    onPrimaryContainer: "#333333",

    secondary: "#E0E0E0",
    onSecondary: "#1A1A1A",
    secondaryContainer: "#F5F5F5",
    onSecondaryContainer: "#262626",

    tertiary: "#DADADA",
    onTertiary: "#1A1A1A",
    tertiaryContainer: "#F0F0F0",
    onTertiaryContainer: "#333333",

    background: "#FFFFFF",
    onBackground: "#1A1A1A",

    surface: "#FFFFFF",
    onSurface: "#1A1A1A",

    surfaceVariant: "#F5F5F5",
    onSurfaceVariant: "#3A3A3A",

    outline: "#CCCCCC",
    outlineVariant: "#E0E0E0",

    surfaceTint: "#F8F8F2",
    inverseSurface: "#1A1A1A",
    inverseOnSurface: "#FFFFFF",
    inversePrimary: "#E0E0E0",
  },
});

export const topaz = createTheme({
  ...MD3DarkTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#FFB300",
    onPrimary: "#000000",
    primaryContainer: "#FFE082",
    onPrimaryContainer: "#4A3B00",

    secondary: "#FFA000",
    onSecondary: "#000000",
    secondaryContainer: "#FFD54F",
    onSecondaryContainer: "#4A3200",

    tertiary: "#FFC107",
    onTertiary: "#000000",
    tertiaryContainer: "#FFECB3",
    onTertiaryContainer: "#4A3700",

    background: "#FFF8E1",
    onBackground: "#1A1A1A",

    surface: "#FFFFFF",
    onSurface: "#1A1A1A",

    surfaceVariant: "#FBE9A7",
    onSurfaceVariant: "#3A3A3A",

    outline: "#FFB300",
    outlineVariant: "#FFD54F",

    surfaceTint: "#FFB300",
    inverseSurface: "#1A1A1A",
    inverseOnSurface: "#FFF8E1",
    inversePrimary: "#FFECB3",
  },
});
