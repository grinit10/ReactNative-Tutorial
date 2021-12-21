import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
        <TextInput
          placeholder="Course goal"
          style={{width:'80%', borderColor: "black", borderWidth: 1, padding: 10 }}
        ></TextInput>
        <Button title="ADD"></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});