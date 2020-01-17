
import React from 'react';
import { View, TouchableOpacity, Text, Button, TextInput, StyleSheet } from 'react-native';
import Example from './screens/Example';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AuthStack = createStackNavigator({
  Landing: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Landing',
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'Sign Up',
    },
  },

});

const App = createSwitchNavigator({
  Start: {
    screen: AuthStack,
  },

});


export default createAppContainer(App);
