/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * THIS IS EMPTY ON PURPOSE
 * For future use TRN ibid...
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, LogBox} from 'react-native';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  // Ignore log notification by message:
  LogBox.ignoreLogs(['Warning: ...']);

  // Ignore all log notifications:
  LogBox.ignoreAllLogs();

  return (
    <SafeAreaView>
      <View>
        <Text>This this the place...</Text>
      </View>
      <View>
        <Text>where the cool hang out...</Text>
      </View>
      <View>
        <Text>the rich like to play...</Text>
      </View>
      <View>
        <Text>and the cool like to shout...</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {},
  sectionTitle: {},
  sectionDescription: {},

  Textinput: {
    heightWeight: 40,
    marginTop: 12,
    borderWidth: 1,
    backgroundColor: '#EEE333',
  },
});

export default UselessTextInput;
