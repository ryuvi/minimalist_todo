import { Stack } from "expo-router";
import { ThemeProvider } from "../hooks/useTheme";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Tarefas", headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}
