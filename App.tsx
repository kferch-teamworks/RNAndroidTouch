import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [buttonPressCount, setButtonPressCount] = useState(0);
  return (
    <View style={{ flex: 1, gap: 16, padding: 16, marginTop: 32 }}>
      <Text style={{ fontWeight: "600"}}>React Native TextInput and Button</Text>
      <TextInput style={{ borderWidth: 1, height: 40,  }} placeholder="Type something..." onChangeText={newText => setInputText(newText)}/>
      <Text>input text is: {inputText}</Text>
      <Button title="Press me" onPress={() => setButtonPressCount(buttonPressCount + 1)} />
      <Text>button has been pressed {buttonPressCount} times.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
