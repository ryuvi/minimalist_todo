import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Modal, Portal, Button, Text } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { ThemeContext, ThemeKey } from "../hooks/useTheme"; // ajuste o path se necessário

const themeOptions = [
  { label: "Green Pastel", value: "green" },
  { label: "Pink Pastel", value: "pink" },
  { label: "Red Pastel", value: "red" },
  { label: "Yellow Pastel", value: "yellow" },
  { label: "Purple Pastel", value: "purple" },
  { label: "Mint Pastel", value: "mint" },
  { label: "Lilac Pastel", value: "lilac" },
];

interface ConfigModalProps {
  visible: boolean;
  onDismiss: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({ visible, onDismiss }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey | undefined>();

  const { currentThemeKey, changeTheme } = useContext(ThemeContext);

  const handleSave = () => {
    if (selectedTheme) {
      changeTheme(selectedTheme);
    }
    onDismiss();
  };


  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={{ backgroundColor: "white", padding: 20, margin: 20, borderRadius: 8 }}>
        <Text variant="titleMedium" style={{ marginBottom: 16 }}>
          Configurações
        </Text>

        <Dropdown
          label={"Tema da Aplicação"}
          mode={"outlined"}
          value={selectedTheme ?? currentThemeKey}
          onSelect={(value) => setSelectedTheme(value as ThemeKey)}
          options={themeOptions}
        />

        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 24 }}>
          <Button onPress={onDismiss}>Cancelar</Button>
          <Button onPress={handleSave}>Salvar</Button>
        </View>
      </Modal>
    </Portal>
  );
};
