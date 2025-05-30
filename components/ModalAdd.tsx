import { useState, useEffect } from "react";
import { Portal, Modal, Text, TextInput, Button, RadioButton } from "react-native-paper";
import { Todo } from "../hooks/useItemsStore";
import { View } from "react-native";

interface Props {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  item: Todo | null;
  setItem: (item: Todo | null) => void;
  items: Todo[];
  addItem: (item: Omit<Todo, "id">) => void;
}

function getDaysRemaining(dueDate: Date): number {
  const today = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = (dueDate.getTime() - today.getTime()) / msPerDay;
  return daysRemaining;
}


function getPriority(dueDate: Date): number {
  const daysRemaining = getDaysRemaining(dueDate);
  if (daysRemaining < 3) return 1;
  else if (3 < daysRemaining && daysRemaining < 15) return 2;
  else return 3;
}

export default function ModalAdd({
  isVisible,
  setIsVisible,
  item,
  setItem,
  items,
  addItem,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(3);
  const [dueDate, setDueDate] = useState("");
  const [tag, setTag] = useState(""); // novo estado para tag

  useEffect(() => {
    if (item) {
      setTitle(item.title || "");
      setDescription(item.description || "");
      setDueDate(item.dueDate ? new Date(item.dueDate).toISOString().substring(0, 10) : "");
      setPriority(item.priority || 3);
      setTag(item.tag || ""); // inicializa tag se existir
    } else {
      setTitle("");
      setDescription("");
      setPriority(3);
      setDueDate("");
      setTag(""); // reseta tag quando não tiver item
    }
  }, [item]);

  const handleSave = () => {
    if (!title || !dueDate) return;

    const parsedDate = new Date(dueDate);
    if (isNaN(parsedDate.getTime())) {
      alert("Data inválida!");
      return;
    }

    addItem({
      title,
      description,
      completed: false,
      priority: getPriority(parsedDate),
      createdAt: new Date().toString(),
      dueDate: parsedDate.toString(),
      tag, // adiciona tag ao salvar
    });

    setIsVisible(false);
    setItem(null);
  };

  return (
    <Portal>
      <Modal
        contentContainerStyle={{ padding: 20, backgroundColor: "white", margin: 20, borderRadius: 10 }}
        visible={isVisible}
        onDismiss={() => {
          setIsVisible(false);
          setItem(null);
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Adicionar Tarefa</Text>

        <TextInput
          mode="outlined"
          label="Título"
          value={title}
          onChangeText={setTitle}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          mode="outlined"
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          style={{ marginBottom: 10 }}
          multiline={true}
        />
        <TextInput
          mode="outlined"
          label="Prazo"
          placeholder="DD-MM-YYYY"
          value={dueDate}
          onChangeText={setDueDate}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          mode="outlined"
          label="Tag"
          value={tag}
          onChangeText={setTag}
          style={{ marginBottom: 10 }}
        />
{/* 
          <RadioButton.Group onValueChange={newValue => setPriority(parseInt(newValue))} value={priority.toString()}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="3" />
              <Text>Normal</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="2" />
              <Text>Importante</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="1" />
              <Text>Urgente</Text>
            </View>
          </RadioButton.Group> */}
        <Button mode="contained" onPress={handleSave} disabled={!title || !dueDate}>
          Salvar
        </Button>
      </Modal>
    </Portal>
  );
}
