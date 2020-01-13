import React from 'react';
import { View, TouchableOpacity, Text, Button, TextInput, StyleSheet } from 'react-native';
import Example from './screens/Example';
import SignInScreen from './screens/SignInScreen';
import SignUp1 from './screens/SignUp1';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AuthStack = createStackNavigator({
  Landing: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Landing',
    },
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  SignUp: {
    screen: SignUp1,
    navigationOptions: {
      headerTitle: 'Sign Up',
    },
  },
  ForgotPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Forgot Password',
    },
  },
  ResetPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Reset Password',
    },
  },
});

const App = createSwitchNavigator({
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: Example,
  },
});


export default createAppContainer(App);
