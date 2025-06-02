import { MD3DarkTheme } from "react-native-paper";

const createTheme = (customColors: Object) => {
  return {
    ...MD3DarkTheme,
    ...customColors
  }
}

export { createTheme }