import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button as NativeButton, StyleSheet, Text as NativeText, TextInput as NativeTextInput, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export default function App() {
  const [inputNativeText, setInputNativeText] = useState("");
  const [nativeButtonPressCount, setNativeButtonPressCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [buttonPressCount, setButtonPressCount] = useState(0);
  return (
    <View style={{ flex: 1, gap: 16, padding: 16, marginTop: 32 }}>
      <View style={{ gap: 16, marginTop: 32 }}>
        <NativeText style={{ fontWeight: "600"}}>React Native NativeTextInput and Button</NativeText>
        <NativeTextInput style={{ borderWidth: 1, height: 40, paddingLeft: 8 }} placeholder="Type something..." onChangeText={newText => setInputNativeText(newText)}/>
        <NativeText>input text is: {inputNativeText}</NativeText>
        <NativeButton title="Press me" onPress={() => setNativeButtonPressCount(nativeButtonPressCount + 1)} />
        <NativeText>button has been pressed {nativeButtonPressCount} times.</NativeText>
      </View>
      <View style={{ gap: 16, marginTop: 32 }}>
        <Text style={{ fontWeight: "bold"}}>React Native Paper TextInput and Button</Text>
        <TextInput style={{ borderWidth: 1, height: 40,  }} placeholder="Type something..." onChangeText={newText => setInputText(newText)}/>
        <Text>input text is: {inputText}</Text>
        <Button mode="contained" onPress={() => setButtonPressCount(buttonPressCount + 1)}>Press me</Button>
        <Text>button has been pressed {buttonPressCount} times.</Text>
      </View>
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
