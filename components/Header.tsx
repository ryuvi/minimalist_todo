import { View, Image } from "react-native";
import { Appbar, useTheme } from "react-native-paper";

export default function Header() {
  const theme = useTheme();

  return (
    <Appbar.Header elevated={true} style={{ backgroundColor: theme.colors.secondaryContainer }}>
      {/* <View>
        <Image source={require("../assets/logo-min.svg")} style={{ width: 25, height:25 }} resizeMode="contain" />
      </View> */}
      <Appbar.Content title="Tarefas" />
    </Appbar.Header>
  );
}
