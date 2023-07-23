import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHolder(enteredText) {
    setEnteredGoalText(enteredText);

  }

  function addGoalHandler() {
    if (enteredGoalText.trim() === "") {
      return; // Don't add an empty goal
    }
    setCourseGoals((currentCourseGoals) => [...courseGoals, {text: enteredGoalText, key: Math.random().toString()}]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your course goal!"
          onChangeText={goalInputHolder} 
          value={enteredGoalText} 
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return (<View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>);
        }} >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    fontSize: 20,
    color: 'black',
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    width: "73%",
    padding: 10,
    marginRight: 10,
  },
  goalsContainer: {
    paddingLeft: 10,
    flex: 5,
  },
  goalItem: {
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
    padding: 6,
    borderRadius: 8
  },
  goalText: {
    fontSize: 20,
    color: "black",
  },
});

// Git updated
