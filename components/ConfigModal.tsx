// ConfigModal
import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Modal, Portal, Button, Text } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { useTheme, ThemeKey } from "../hooks/useTheme"; // ajuste o path se necessário
import { useTheme as usePaperTheme } from "react-native-paper";

const themeOptions = [
  { label: "Verde Pastel", value: "green" },
  { label: "Rosa Pastel", value: "pink" },
  { label: "Vermelho Pastel", value: "red" },
  { label: "Amarelo Pastel", value: "yellow" },
  { label: "Roxo Pastel", value: "purple" },
  { label: "Menta Pastel", value: "mint" },
  { label: "Lilás Pastel", value: "lilac" },
];

interface ConfigModalProps {
  visible: boolean;
  onDismiss: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({ visible, onDismiss }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey | undefined>();
  const { themeKey, setThemeKey } = useTheme();
  const theme = usePaperTheme();


  const handleSave = () => {
    if (selectedTheme) {
      setThemeKey(selectedTheme);
    }
    onDismiss();
  };


  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={{ backgroundColor: theme.colors.surface, padding: 20, margin: 20, borderRadius: 8 }}>
        <Text variant="titleMedium" style={{ marginBottom: 16 }}>
          Configurações
        </Text>

        <Dropdown
          label={"Tema da Aplicação"}
          mode={"outlined"}
          value={selectedTheme ?? themeKey}
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
