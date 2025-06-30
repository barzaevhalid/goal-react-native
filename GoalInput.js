import {View, TextInput, StyleSheet, Modal, Button, Image} from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Image style={styles.img} source={require('./assets/goal.png')} />
      <TextInput style={styles.input} placeholder="Введите текст" {...props} />

        <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add goal" onPress={props.addGoalHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={() => props.setModalIsVisible(false)} />
        </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "100%",
    color: "#fff",
  },
  modalContainer: {
    padding: 16,
    flex: 1,
    backgroundColor: "#311b6b",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row"
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  img: {
    width: "100",
marginBottom: 10,
    height: "100",
  }
});

export default GoalInput;
