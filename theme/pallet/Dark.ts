import { MD3DarkTheme } from "react-native-paper";

const baseDarkThemeProps = {
  ...MD3DarkTheme,
}

const errorColors = {
  error: "#F4B2B2",
  onError: "#2C1B1B",
  errorContainer: "#5C1B1B",
  onErrorContainer: "#FDE1E1",
};

const createDarkTheme = (customColors: Object) => {
  return {
    ...baseDarkThemeProps,
    colors: {
      ...MD3DarkTheme.colors,
      ...customColors,
      ...errorColors,
      shadow: '#000000',
      scrim: '#000000'
    }
  }
}

export const greenPastelDarkTheme = createDarkTheme({
    primary: "#7EB89C",
    onPrimary: "#0D1C15",

    primaryContainer: "#275F45",
    onPrimaryContainer: "#DFF5E1",

    secondary: "#9FCBB4",
    onSecondary: "#0F1E18",

    secondaryContainer: "#2B6048",
    onSecondaryContainer: "#E1F7EA",

    tertiary: "#96C7B1",
    onTertiary: "#0E1F19",

    tertiaryContainer: "#285C47",
    onTertiaryContainer: "#DCF4E9",

    background: "#121411",
    onBackground: "#DEE4DE",

    surface: "#121411",
    onSurface: "#DEE4DE",

    surfaceVariant: "#404942",
    onSurfaceVariant: "#C1D5CA",

    outline: "#8A9F94",

    inverseSurface: "#E5EBE6",
    inverseOnSurface: "#1C1B1F",

    inversePrimary: "#A8D5BA",

    surfaceTint: "#7EB89C",

    outlineVariant: "#5B6B63",
  });

export const bluePastelDarkTheme = createDarkTheme({
    primary: "#7AB0D0",
    onPrimary: "#0C1B26",

    primaryContainer: "#2D5E7A",
    onPrimaryContainer: "#DCEFF9",

    secondary: "#8DBCD9",
    onSecondary: "#0A1B25",

    secondaryContainer: "#2E5F79",
    onSecondaryContainer: "#E2F2FB",

    tertiary: "#8EB6DD",
    onTertiary: "#0E1C28",

    tertiaryContainer: "#2B5976",
    onTertiaryContainer: "#E1F0FF",

    background: "#121416",
    onBackground: "#DCE3E8",

    surface: "#121416",
    onSurface: "#DCE3E8",

    surfaceVariant: "#40484F",
    onSurfaceVariant: "#C1CED6",

    outline: "#8A9AA4",

    inverseSurface: "#E6EBEF",
    inverseOnSurface: "#1B1D1F",

    inversePrimary: "#A5C8E1",

    surfaceTint: "#7AB0D0",

    outlineVariant: "#5B6770",
  },
);

export const pinkPastelDarkTheme = createDarkTheme({
    primary: "#D88EA5",
    onPrimary: "#2A1017",

    primaryContainer: "#5E2B3A",
    onPrimaryContainer: "#FCE3EB",

    secondary: "#D998AE",
    onSecondary: "#2B1119",

    secondaryContainer: "#5C2C3A",
    onSecondaryContainer: "#FDE7EF",

    tertiary: "#D0889D",
    onTertiary: "#260E16",

    tertiaryContainer: "#552C3B",
    onTertiaryContainer: "#FBE2EB",

    background: "#191517",
    onBackground: "#FBEDEF",

    surface: "#191517",
    onSurface: "#FBEDEF",

    surfaceVariant: "#4B3B42",
    onSurfaceVariant: "#D7C2C8",

    outline: "#9C808A",
    outlineVariant: "#5D4A51",

    surfaceTint: "#D88EA5",
    inverseSurface: "#FCE9ED",
    inverseOnSurface: "#322F30",
    inversePrimary: "#F2AFC3",
  },
);

export const redPastelDarkTheme = createDarkTheme({
    primary: "#DA6E6E",
    onPrimary: "#2C0A0A",

    primaryContainer: "#5C1C1C",
    onPrimaryContainer: "#FCDCDC",

    secondary: "#CD6F6F",
    onSecondary: "#2A0F0F",

    secondaryContainer: "#4C1A1A",
    onSecondaryContainer: "#FEE5E5",

    tertiary: "#C85C5C",
    onTertiary: "#250B0B",

    tertiaryContainer: "#481616",
    onTertiaryContainer: "#FBDADA",

    background: "#1A1414",
    onBackground: "#FBEDED",

    surface: "#1A1414",
    onSurface: "#FBEDED",

    surfaceVariant: "#4C3A3A",
    onSurfaceVariant: "#D7BCBC",

    outline: "#9E7D7D",
    outlineVariant: "#5C4444",

    surfaceTint: "#DA6E6E",
    inverseSurface: "#FCE9E9",
    inverseOnSurface: "#322F2F",
    inversePrimary: "#F28C8C",
  },
);

export const yellowPastelDarkTheme = createDarkTheme({
    primary: "#D5B66E",
    onPrimary: "#2F230A",

    primaryContainer: "#4F3D1A",
    onPrimaryContainer: "#FFF5D5",

    secondary: "#D2BE87",
    onSecondary: "#2A2309",

    secondaryContainer: "#4B3D1A",
    onSecondaryContainer: "#FFF7D6",

    tertiary: "#C8A865",
    onTertiary: "#251D08",

    tertiaryContainer: "#443518",
    onTertiaryContainer: "#FFF0D4",

    background: "#1A1813",
    onBackground: "#F5EFDC",

    surface: "#1A1813",
    onSurface: "#F5EFDC",

    surfaceVariant: "#4D4632",
    onSurfaceVariant: "#D7CEB1",

    outline: "#9D9172",
    outlineVariant: "#574F38",

    surfaceTint: "#D5B66E",
    inverseSurface: "#FBF0E2",
    inverseOnSurface: "#322F2B",
    inversePrimary: "#F2D28C",
  },
);

export const purplePastelDarkTheme = createDarkTheme({
    primary: "#B2A0E0",
    onPrimary: "#271A41",

    primaryContainer: "#3B2D5D",
    onPrimaryContainer: "#F3EFFF",

    secondary: "#CDB8E7",
    onSecondary: "#1F1234",

    secondaryContainer: "#3A2A52",
    onSecondaryContainer: "#F7F0FF",

    tertiary: "#BBA3DC",
    onTertiary: "#1A112F",

    tertiaryContainer: "#3A2B51",
    onTertiaryContainer: "#F4EEFF",

    background: "#1A181D",
    onBackground: "#ECE6F5",

    surface: "#1A181D",
    onSurface: "#ECE6F5",

    surfaceVariant: "#4C4458",
    onSurfaceVariant: "#D7CFE3",

    outline: "#A298AE",
    outlineVariant: "#5D536B",

    surfaceTint: "#B2A0E0",
    inverseSurface: "#F2EDF6",
    inverseOnSurface: "#322F36",
    inversePrimary: "#D3C2F3",
  },
);

export const mintPastelDarkTheme = createDarkTheme({
    primary: "#72CBB0",
    onPrimary: "#00382A",

    primaryContainer: "#005142",
    onPrimaryContainer: "#DFFAF0",

    secondary: "#84D8BD",
    onSecondary: "#00382A",

    secondaryContainer: "#005142",
    onSecondaryContainer: "#D6FBEA",

    tertiary: "#68C7B4",
    onTertiary: "#00332B",

    tertiaryContainer: "#004E44",
    onTertiaryContainer: "#D5F8F0",

    background: "#111411",
    onBackground: "#DAE5DF",

    surface: "#111411",
    onSurface: "#DAE5DF",

    surfaceVariant: "#3F4944",
    onSurfaceVariant: "#C0CCC6",

    outline: "#899991",
    outlineVariant: "#4E5A55",

    surfaceTint: "#72CBB0",
    inverseSurface: "#EFF7F1",
    inverseOnSurface: "#2F312F",
    inversePrimary: "#A8E6CF",
  },
);

export const lilacPastelDarkTheme = createDarkTheme({
    primary: "#B293CC",
    onPrimary: "#321F45",

    primaryContainer: "#4A3A5E",
    onPrimaryContainer: "#F5ECFA",

    secondary: "#CBA6E4",
    onSecondary: "#341C44",

    secondaryContainer: "#4F376A",
    onSecondaryContainer: "#F7EAFE",

    tertiary: "#B899D1",
    onTertiary: "#2D1F3A",

    tertiaryContainer: "#453055",
    onTertiaryContainer: "#F3E7F9",

    background: "#1D1B20",
    onBackground: "#E8E0EA",

    surface: "#1D1B20",
    onSurface: "#E8E0EA",

    surfaceVariant: "#49454F",
    onSurfaceVariant: "#CBC4D0",

    outline: "#958E99",
    outlineVariant: "#4A4450",

    surfaceTint: "#B293CC",
    inverseSurface: "#E8E0EA",
    inverseOnSurface: "#2F2C32",
    inversePrimary: "#CDB4DB",
  },
);

export const peachPastelDarkTheme = createDarkTheme({
    primary: "#D49987",
    onPrimary: "#3A1C16",

    primaryContainer: "#6F3E31",
    onPrimaryContainer: "#FDEBE7",

    secondary: "#C99388",
    onSecondary: "#3D1D16",

    secondaryContainer: "#764635",
    onSecondaryContainer: "#FBEAE5",

    tertiary: "#CDA99F",
    onTertiary: "#3E1F18",

    tertiaryContainer: "#6E4D44",
    onTertiaryContainer: "#FAF0EB",

    background: "#33241D",
    onBackground: "#F1DED7",

    surface: "#33241D",
    onSurface: "#F1DED7",

    surfaceVariant: "#635045",
    onSurfaceVariant: "#D6C4BB",

    outline: "#A18B83",
    outlineVariant: "#4F433E",

    surfaceTint: "#D49987",
    inverseSurface: "#FAEEE8",
    inverseOnSurface: "#4F3C35",
    inversePrimary: "#F9C6B7",
  },
);

