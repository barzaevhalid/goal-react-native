import {View, TextInput, StyleSheet, Modal, Button} from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={false} animationType="slide">
      <TextInput style={styles.input} placeholder="Введите текст" {...props} />
      <Button title="Add goal" onPress={props.addgoalHandler} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "70%",
  },
});

export default GoalInput;
