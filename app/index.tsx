// index
import { useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import {
  Portal,
  Card,
  Text,
  Button,
  FAB,
  useTheme,
  ActivityIndicator,
  Badge,
  Chip,
} from "react-native-paper";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import { useRef, useEffect } from "react";

import Header from "../components/Header";
import ModalAdd from "../components/ModalAdd";
import { ConfigModal } from "../components/ConfigModal";
import ModalViewItem from "../components/ModalViewItem";
import { ThemeProvider } from "../hooks/useTheme";

import { useTodosStore, Todo } from "../hooks/useItemsStore"; // ajuste o caminho

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function getDaysRemaining(dueDate: Date): number {
  const today = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = (dueDate.getTime() - today.getTime()) / msPerDay;
  return daysRemaining;
}

function getDueDateColor(dueDate: Date): string {
  const daysRemaining = getDaysRemaining(dueDate);
  if (daysRemaining < 3) return "red";
  else if (3 < daysRemaining && daysRemaining < 15) return "gold";
  else return "green";
}

function getPriority(dueDate: Date): number {
  const daysRemaining = getDaysRemaining(dueDate);
  if (daysRemaining < 3) return 1;
  else if (3 < daysRemaining && daysRemaining < 15) return 2;
  else return 3;
}

function AnimatedTodoItem({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedScale = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 300,
        delay: index * 80,
        useNativeDriver: true,
      }),
      Animated.timing(animatedScale, {
        toValue: 1,
        duration: 300,
        delay: index * 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: animatedOpacity,
        transform: [{ scale: animatedScale }],
      }}
    >
      {children}
    </Animated.View>
  );
}

function TodoItem({ item, index, deletedItems, onDelete, onComplete, onOpen }) {
  const animation = useRef(new Animated.Value(1)).current;
  const theme = useTheme();

  useEffect(() => {
    if (deletedItems.includes(item.id)) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [deletedItems]);

  const renderLeftActions = () => (
    <View
      style={{
        backgroundColor: "#ef5350",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20,
        flex: 1,
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>Excluir</Text>
    </View>
  );

  const renderRightActions = () => (
    <View
      style={{
        backgroundColor: "#66bb6a",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 20,
        flex: 1,
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>Concluir</Text>
    </View>
  );

  const handleSwipeDelete = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onDelete(item.id);
  };

  const handleSwipeComplete = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onComplete(item.id);
  };

  return (
    <AnimatedTodoItem index={index}>
      <Swipeable
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        onSwipeableLeftOpen={handleSwipeDelete}
        onSwipeableRightOpen={handleSwipeComplete}
      >
        <TouchableOpacity onPress={() => onOpen(item)}>
          <Card
            key={item.id}
            mode="elevated"
            style={{
              margin: 10,
              backgroundColor: theme.colors.secondaryContainer,
              borderWidth: 2,
              borderColor: item.completed
                ? "gray"
                : getDueDateColor(new Date(item.dueDate)),
              opacity: item.completed ? 0.6 : 1,
            }}
          >
            <Badge
              visible
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                fontSize: 16,
                padding: 5,
                height: 30,
                width: 30,
                borderRadius: 15,
                fontWeight: 'bold'
              }}
            >
              {item.priority}
            </Badge>
            <Card.Title title={item.title} />
            <Card.Content>
              {item.tag ? (
                <Text style={{ marginTop: 4, fontStyle: "italic" }}>
                  Tag: {item.tag}
                </Text>
              ) : null}
            </Card.Content>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                marginRight: 5,
              }}
            >
              <Text style={{ color: theme.colors.onPrimaryContainer }}>
                Prazo: {formatDate(new Date(item.dueDate))}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </Swipeable>
    </AnimatedTodoItem>
  );
}

export default function Index() {
  const theme = useTheme();
  const [fabOpen, setFabOpen] = useState(false);
  const [fabExtended, setFabExtended] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [configVisible, setConfigVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Todo | null>(null);
  const [modalViewVisible, setModalViewVisible] = useState(false);
  const [isFiltered, setIsFiltered] = useState({
    completed: false,
    urgente: false,
    importante: false,
    normal: false,
  });
  const [deletedItems, setDeletedItems] = useState<string[]>([]);

  // Zustand store
  const todos = useTodosStore((state) => state.todos);
  const addTodo = useTodosStore((state) => state.addTodo);
  const toggleTodo = useTodosStore((state) => state.toggleTodo);

  // Como o Zustand não tem loading (assíncrono com persistência), a gente pode simular:
  const loading = false;

  const handleScroll = ({
    nativeEvent,
  }: {
    nativeEvent: { contentOffset: { y: number } };
  }) => {
    const scrollY = Math.floor(nativeEvent.contentOffset?.y ?? 0);
    setFabExtended(scrollY <= 0);
  };

  const handleOpenViewModal = (item: Todo) => {
    setSelectedItem(item);
    setModalViewVisible(true);
  };

  const handleEdit = (item: Todo) => {
    setModalViewVisible(false);
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleDelete = (id: string) => {
    setModalViewVisible(false);
    // Zustand não tem remove direto, precisa criar (vou sugerir abaixo)
    // Mas enquanto isso:
    // criar uma função remove no store ou fazer filtro aqui e set
    // Por enquanto, vamos criar remove no store e chamar:
    useTodosStore.getState().removeTodo?.(id);
  };

  const handleAdd = () => {
  const today = new Date();
  today.setDate(today.getDate() + 7); // modifica o objeto `today`

  setSelectedItem({
    id: "",
    title: "",
    description: "",
    completed: false,
    priority: 3,
    createdAt: new Date().toISOString(),
    dueDate: today.toISOString(), // agora sim, convertido corretamente
    tag: "",
  });
  setModalVisible(true);
};


  const handleComplete = (item: Todo) => {
    toggleTodo(item.id);
  };

  const filterTodos = (todos: Todo[]) => {
    return todos.filter(
      (todo) =>
        (isFiltered.completed && todo.completed) ||
        (isFiltered.urgente && todo.priority === 1) ||
        (isFiltered.importante && todo.priority === 2) ||
        (isFiltered.normal && todo.priority === 3)
    );
  };

  return (
      <GestureHandlerRootView style={{ backgroundColor: theme.colors.surface, flex: 1 }}>
      <Portal.Host>
        <Header />

        <View>
          <Animated.FlatList
            data={Object.keys(isFiltered)}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{  }}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            renderItem={({ item }) => {
              const count = todos.filter((todo) => {
                if (item === "completed") return todo.completed;
                if (item === "urgente")
                  return getPriority(new Date(todo.dueDate)) === 1;
                if (item === "importante")
                  return getPriority(new Date(todo.dueDate)) === 2;
                if (item === "normal")
                  return getPriority(new Date(todo.dueDate)) === 3;
                return false;
              }).length;

              return (
                <Chip
                  icon={isFiltered[item] ? "close" : "plus"}
                  selected={isFiltered[item]}
                  onPress={() =>
                    setIsFiltered((prev) => ({ ...prev, [item]: !prev[item] }))
                  }
                  style={{ marginRight: 5, marginTop: 5 }}
                  mode={isFiltered[item] ? "outlined" : "flat"}
                >
                  {item} ({count})
                </Chip>
              );
            }}
          />
        </View>

        {loading ? (
          <ActivityIndicator style={{ marginTop: 40 }} />
        ) : (
          <Animated.FlatList
            data={
              Object.values(isFiltered).some(Boolean)
                ? filterTodos(todos)
                : todos
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TodoItem
                item={item}
                index={index}
                deletedItems={deletedItems}
                onDelete={(id) => {
                  setDeletedItems((prev) => [...prev, id]);
                  setTimeout(() => {
                    useTodosStore.getState().removeTodo?.(id);
                  }, 250);
                }}
                onComplete={toggleTodo}
                onOpen={handleOpenViewModal}
              />
            )}
            onScroll={handleScroll}
            
          />
        )}

        <ModalViewItem
          item={selectedItem}
          visible={modalViewVisible}
          onDismiss={() => setModalViewVisible(false)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <ConfigModal
          visible={configVisible}
          onDismiss={() => setConfigVisible(false)}
        />

        <ModalAdd
          isVisible={modalVisible}
          setIsVisible={setModalVisible}
          item={selectedItem}
          setItem={setSelectedItem}
          items={todos}
          // precisa chamar addTodo direto no ModalAdd:
          addItem={addTodo}
        />

        <Portal>
          <FAB.Group
            open={fabOpen}
            visible
            icon={fabOpen ? "close" : "plus"}
            actions={[
              {
                icon: "cog",
                label: "Mudar Tema",
                onPress: () => setConfigVisible(true),
              },
              {
                icon: "plus",
                label: "Adicionar",
                onPress: handleAdd,
              },
            ]}
            onStateChange={({ open }) => setFabOpen(open)}
          />
        </Portal>
      </Portal.Host>
      </GestureHandlerRootView>
  );
}
