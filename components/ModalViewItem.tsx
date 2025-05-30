import React from "react";
import { View } from "react-native";
import { Portal, Modal, Text, Button, useTheme } from "react-native-paper";
import { Todo } from "../hooks/useItemsStore";

interface Props {
  item: Todo | null;
  visible: boolean;
  onDismiss: () => void;
  onEdit: (item: Todo) => void;
  onDelete: (id: string) => void;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date);
}

export default function ModalViewItem({
  item,
  visible,
  onDismiss,
  onEdit,
  onDelete,
}: Props) {
  if (!item) return null;

  const { colors } = useTheme();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={{
          backgroundColor: colors.surface,
          margin: 20,
          borderRadius: 10,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          {item.title}
        </Text>
        <Text style={{ marginBottom: 8 }}>
          <Text style={{ fontWeight: "bold" }}>Descrição: </Text>
          {item.description || "-"}
        </Text>
        <Text style={{ marginBottom: 8 }}>
          <Text style={{ fontWeight: "bold" }}>Prazo: </Text>
          {formatDate(new Date(item.dueDate))}
        </Text>
        <Text style={{ marginBottom: 8 }}>
          <Text style={{ fontWeight: "bold" }}>Tag: </Text>
          {item.tag || "-"}
        </Text>
        <Text style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Status: </Text>
          {item.completed ? "Concluído" : "Pendente"}
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button mode="outlined" onPress={onDismiss}>
            Cancelar
          </Button>

          <Button
            mode="contained"
            onPress={() => onEdit(item)}
            style={{ }}
          >
            Editar
          </Button>

          <Button
            mode="contained"
            buttonColor={colors.error}
            onPress={() => onDelete(item.id)}
          >
            Excluir
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}
