import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  TextInput
} from "react-native";

const LoginMod = ({ closeModal }) => {
  return (
    <View style={styles.flex}>
      <ScrollView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>All assets</Text>
        <TextInput style={styles.textInput} placeholder="email@example.com" />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          secureTextEntry={true}
        />
        <TouchableHighlight onPress={closeModal} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>

        <Text style={styles.text}>Create an account</Text>
        <TextInput style={styles.textInput} placeholder="email@example.com" />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.textInput}
          placeholder="repeat password"
          secureTextEntry={true}
        />
        <TouchableHighlight onPress={closeModal} style={styles.button}>
           <Text style={styles.buttonText}>Sing Up</Text>
        </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 20,
    marginTop: 20
  },
  button: {
    borderRadius: 5,
    backgroundColor: "green",
    marginTop: 10,
    width: "30%",
    height: 40,
    justifyContent: 'center',
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#e6f0ff",
    borderWidth: 2,
    width: "95%",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 12 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 15
  },
  textInput: {
    borderBottomWidth: 1,
    width: "50%",
    fontSize: 15
  }
});

export default LoginMod;
