import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export const SignIn = ({ navigation }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../images/logo.jpg")}
      ></Image>
      <Text style={styles.logo}>SalonSphere</Text>
      <Text style={styles.text}>Login</Text>
      <Text style={styles.p}>Please enter your credentials to login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Enter email"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Enter Password"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
  },
  image: {
    height: 250,
    width: 200,
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    width: 250,
    borderRadius: 20,
  },
  p: {
    fontSize: 10,
    // fontWeight:100
  },
});

export default SignIn;
