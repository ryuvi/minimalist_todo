import { Appbar, useTheme } from "react-native-paper";

export default function Header() {
  const theme = useTheme();

  return (
    <Appbar.Header elevated={true} style={{ backgroundColor: theme.colors.secondaryContainer }}>
      <Appbar.Content title="Tarefas" />
    </Appbar.Header>
  );
}
