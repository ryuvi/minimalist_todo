// ConfigModal.tsx
import React, { useState } from "react";
import { View } from "react-native";
import { Modal, Portal, Button, Text, Surface, useTheme as PaperTheme } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { useTheme, ThemeKey, themeMap } from "../hooks/useTheme"; // ajuste o path se necessário

const themeOptions = [
  { label: "Rosa Pastel", value: "pink" },
  { label: "Amarelo Pastel", value: "yellow" },
  { label: "Menta Pastel", value: "mint" },
  { label: "Lilás Pastel", value: "lilac" },
  { label: "Laranja Pastel", value: "peach" },

  { label: "Ruby", value: "ruby" },
  { label: "Sapphire", value: "sapphire" },
  { label: "Emerald", value: "emerald" },
  { label: "Amethyst", value: "amethyst" },
  { label: "Pearl", value: "pearl" },
  { label: "Topaz", value: "topaz" },

  { label: "Cyberpunk", value: "cyberpunk" },
  { label: "Dracula", value: "dracula" },
  { label: "Synthwave", value: "synthwave" },
  { label: "Neon Tokyo", value: "neonTokyo" },
  { label: "Vivid Red", value: "vividRed" },
  { label: "Red Black", value: "redBlack" },
];

interface ConfigModalProps {
  visible: boolean;
  onDismiss: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({ visible, onDismiss }) => {
  const { themeKey, setThemeKey } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>(themeKey);
  const { colors } = PaperTheme();

  const previewTheme = themeMap[selectedTheme]; // Mostra preview do tema selecionado

  const handleSave = () => {
    setThemeKey(selectedTheme);
    onDismiss();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={{
          backgroundColor: previewTheme.colors.surfaceVariant,
          padding: 20,
          margin: 20,
          borderRadius: 8,
        }}
      >
        <Text variant="titleMedium" style={{ marginBottom: 16, color: previewTheme.colors.onPrimaryContainer }}>
          Configurações
        </Text>

        <Dropdown
          data={themeOptions}
          labelField="label"
          valueField="value"
          value={selectedTheme}
          onChange={(item) => setSelectedTheme(item.value as ThemeKey)}
          placeholder="Escolha um tema"
          style={{
  backgroundColor: previewTheme.colors.surface,
  borderRadius: 8,
  padding: 10,
  marginBottom: 16,
}}
selectedTextStyle={{
  color: previewTheme.colors.onSurface,
}}
containerStyle={{
  backgroundColor: previewTheme.colors.surfaceVariant,
}}
itemTextStyle={{
  color: previewTheme.colors.onSurfaceVariant,
}}
activeColor={previewTheme.colors.primary}

        />

        {/* Área de pré-visualização */}
        <Surface
          style={{
            padding: 16,
            backgroundColor: previewTheme.colors.primaryContainer,
            borderRadius: 8,
            marginBottom: 24,
          }}
        >
          <Text style={{ color: previewTheme.colors.onPrimaryContainer }}>
            Isso é um preview do tema!
          </Text>
          <Button
            mode="contained"
            style={{ marginTop: 8, backgroundColor: previewTheme.colors.primary }}
            labelStyle={{ color: previewTheme.colors.onPrimary }}
            onPress={() => {}}
          >
            Botão de Exemplo
          </Button>
        </Surface>

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button
            mode="outlined"
            style={{ marginLeft: 8 }}
            textColor={previewTheme.colors.primary}
            onPress={onDismiss}
          >
            Cancelar
          </Button>
          <Button
            mode="contained"
            style={{ marginLeft: 8 }}
            textColor={previewTheme.colors.onPrimary}
            onPress={handleSave}
          >
            Salvar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};
