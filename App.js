import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return(<View style= {styles.container}>
    <TextInput placeholder="Email" style={styles.textInput}/>
    <TextInput placeholder="Password" style={styles.textInput}/>
    <Button title="LOGIN" />
  </View>);
};

const styles = StyleSheet.create({
  container: {
    padding: 100,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: '100%',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding:20
  },
});
