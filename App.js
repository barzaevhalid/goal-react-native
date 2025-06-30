import { use, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView, StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGolas, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const goalInputHandler = (inputText) => {
    setEnteredGoalText(inputText);
  };
  const addGoalHandler = () => {
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);

  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((prev) => prev.filter((item) => item.id !== id));
  };
  return (
      <>
        <StatusBar barStyle={"dark-content"}/>
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <View style={styles.addGoalBtn}>
          <Button
              title="add new goal"
              color="#5e0acc"
              onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
            value={enteredGoalText}
          onChangeText={goalInputHandler}
          addGoalHandler={addGoalHandler}
          modalIsVisible={modalIsVisible}
            setModalIsVisible={setModalIsVisible}
        />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Список целей</Text>

        <FlatList
          data={courseGolas}
          renderItem={({ item }) => (
            <GoalItem item={item} deleteGoalHandler={deleteGoalHandler}  />
          )}
        />
      </View>
    </View>
      </>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 100,
    paddingTop: 100,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 24,
  },

  goalsContainer: {
    flex: 5,
  },
  addGoalBtn: {
    width: "100%",
  }
});
