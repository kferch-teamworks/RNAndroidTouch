import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button as NativeButton, StyleSheet, Text as NativeText, TextInput as NativeTextInput, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

function HomeScreen() {
  const [inputNativeText, setInputNativeText] = useState("");
  const [nativeButtonPressCount, setNativeButtonPressCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [buttonPressCount, setButtonPressCount] = useState(0);
  return (
    <View style={{ flex: 1, gap: 24, padding: 16, marginTop: 24 }}>
      <NativeText>version 1</NativeText>
      <View style={{ gap: 8 }}>
        <NativeText style={{ fontWeight: "bold"}}>React Native</NativeText>
        <NativeTextInput style={{ borderWidth: 1, height: 40, paddingLeft: 8 }} placeholder="Type something..." onChangeText={newText => setInputNativeText(newText)}/>
        <NativeText>input text is: {inputNativeText}</NativeText>
        <NativeButton title="Press me" onPress={() => setNativeButtonPressCount(nativeButtonPressCount + 1)} />
        <NativeText>button has been pressed {nativeButtonPressCount} times.</NativeText>
      </View>
      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: "bold"}}>React Native Paper</Text>
        <TextInput style={{ borderWidth: 1, height: 40,  }} placeholder="Type something..." onChangeText={newText => setInputText(newText)}/>
        <Text>input text is: {inputText}</Text>
        <Button mode="contained" onPress={() => setButtonPressCount(buttonPressCount + 1)}>Press me</Button>
        <Text>button has been pressed {buttonPressCount} times.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}