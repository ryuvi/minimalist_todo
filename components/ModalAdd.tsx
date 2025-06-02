import { useState, useEffect } from "react";
import {
  Portal,
  Modal,
  Text,
  TextInput,
  Button,
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

// Utilitários
function getDaysRemaining(dueDate: Date): number {
  const today = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  return (dueDate.getTime() - today.getTime()) / msPerDay;
}

function getPriority(dueDate: Date): number {
  const daysRemaining = getDaysRemaining(dueDate);
  if (daysRemaining < 3) return 1;
  else if (daysRemaining < 15) return 2;
  return 3;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("pt-BR");
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default function ModalAdd({
  isVisible,
  setIsVisible,
  item,
  setItem,
  items,
  addItem,
}: Props) {
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(3);
  const [tag, setTag] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [finalDate, setFinalDate] = useState<Date | null>(null);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    if (item) {
      const parsed = item.dueDate ? new Date(item.dueDate) : new Date();
      setTitle(item.title || "");
      setDescription(item.description || "");
      setPriority(item.priority || 3);
      setTag(item.tag || "");
      setSelectedDate(parsed);
      setSelectedTime(parsed);
      setFinalDate(parsed);
    } else {
      setTitle("");
      setDescription("");
      setPriority(3);
      setTag("");
      const now = new Date();
      setSelectedDate(now);
      setSelectedTime(now);
      setFinalDate(now);
    }
  }, [item]);

  const updateFinalDate = (date: Date | null, time: Date | null) => {
    if (!date || !time) return;
    const combined = new Date(date);
    combined.setHours(time.getHours(), time.getMinutes(), 0, 0);
    setFinalDate(combined);
  };

  const onChangeDate = (_event: any, selected?: Date) => {
    setShowDate(false);
    if (selected) {
      setSelectedDate(selected);
      updateFinalDate(selected, selectedTime);
    }
  };

  const onChangeTime = (_event: any, selected?: Date) => {
    setShowTime(false);
    if (selected) {
      setSelectedTime(selected);
      updateFinalDate(selectedDate, selected);
    }
  };

  const handleSave = () => {
    if (!title || !finalDate) return;

    addItem({
      title,
      description,
      completed: false,
      priority: getPriority(finalDate),
      createdAt: new Date().toISOString(),
      dueDate: finalDate.toISOString(),
      tag,
    });

    setIsVisible(false);
    setItem(null);
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
          <Text>Prazo:</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 5 }}>
            <Button
              mode="outlined"
              onPress={() => setShowDate(true)}
              style={{ flex: 1, marginHorizontal: 2, borderRadius: 5 }}
              textColor={theme.colors.onPrimaryContainer}
            >
              {selectedDate ? formatDate(selectedDate) : "Data"}
            </Button>
            <Button
              mode="outlined"
              onPress={() => setShowTime(true)}
              style={{ flex: 1, marginHorizontal: 2, borderRadius: 5 }}
              textColor={theme.colors.onPrimaryContainer}
            >
              {selectedTime ? formatTime(selectedTime) : "Hora"}
            </Button>
          </View>
        </View>

        {showDate && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="calendar"
            onChange={onChangeDate}
          />
        )}

        {showTime && (
          <DateTimePicker
            value={selectedTime || new Date()}
            mode="time"
            display="clock"
            onChange={onChangeTime}
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
          disabled={!title || !finalDate}
        >
          Salvar
        </Button>
      </Modal>
    </Portal>
  );
}
