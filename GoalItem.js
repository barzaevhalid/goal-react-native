import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ item, deleteGoalHandler }) => {
  return (
    <Pressable
      onPress={() => deleteGoalHandler(item.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View>
        <Text style={styles.goalItem}>{item.text}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default GoalItem;
