import { useState, useEffect } from "react";
import {
  Portal,
  Modal,
  Text,
  TextInput,
  Button,
  RadioButton,
  useTheme,
} from "react-native-paper";
import { Todo } from "../hooks/useItemsStore";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

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
  return (dueDate.getTime() - today.getTime()) / msPerDay;
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
  const [dueDate, setDueDate] = useState(""); // string formatada
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // para DateTimePicker
  const [tag, setTag] = useState("");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");
  const theme = useTheme();

  useEffect(() => {
    if (item) {
      const parsed = item.dueDate ? new Date(item.dueDate) : null;
      setSelectedDate(parsed);
      setDueDate(parsed ? parsed.toISOString().substring(0, 10) : "");
      setTitle(item.title || "");
      setDescription(item.description || "");
      setPriority(item.priority || 3);
      setTag(item.tag || "");
    } else {
      setSelectedDate(null);
      setDueDate("");
      setTitle("");
      setDescription("");
      setPriority(3);
      setTag("");
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
      tag,
    });

    setIsVisible(false);
    setItem(null);
  };

  const onChange = (_event: any, selected: Date | undefined) => {
    setShow(false);
    if (selected) {
      setSelectedDate(selected);
      setDueDate(selected.toISOString().substring(0, 10));
    }
  };

  const showDatepicker = () => {
    setMode("date");
    setShow(true);
  };

  return (
    <Portal>
      <Modal
        contentContainerStyle={{
          padding: 20,
          backgroundColor: theme.colors.surface,
          margin: 20,
          borderRadius: 10,
        }}
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
          multiline
        />

        <View style={{ marginBottom: 10 }}>
          <Button mode="outlined" onPress={showDatepicker}>
            {dueDate ? `Prazo: ${dueDate}` : "Selecionar prazo"}
          </Button>
        </View>

        {show && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode={mode}
            display="default"
            onChange={onChange}
          />
        )}

        <TextInput
          mode="outlined"
          label="Tag"
          value={tag}
          onChangeText={setTag}
          style={{ marginBottom: 10 }}
        />

        <Button
          mode="contained"
          onPress={handleSave}
          disabled={!title || !dueDate}
        >
          Salvar
        </Button>
      </Modal>
    </Portal>
  );
}
