import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, image } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import DisplayImage from "./components/DisplayImage";
import Header from "./components/Header";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);

  const addTaskHandler = (taskTitle) => {
    setTasks((currentTask) => [
      ...currentTask,
      {
        id: Math.random().toString(),
        value: taskTitle,
      },
    ]);
    setAddTasks(false);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((currentTask) => {
      return currentTask.filter((task) => task.id !== taskId);
    });
  };

  const cancelTaskAdditionHandler = () => {
    setAddTasks(false);
  };

  return (
    <View>
      <Header title="To-do App"></Header>
      <View style={styles.screen}>
        <Button title="Add New Task" onPress={() => setAddTasks(true)}></Button>
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={cancelTaskAdditionHandler}
        />
      </View>

      <DisplayImage taskStatus={tasks} />
      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={(itemData) => (
            <TodoItem
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { paddingTop: 70, paddingHorizontal: 70 },
  screenlist: {
    marginLeft: 20,
    marginRight: 20,
  },
});
