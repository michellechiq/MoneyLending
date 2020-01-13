import React from 'react';
import Example from './screens/Example';
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
    screen: Example,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  CreateAccount: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Create Account',
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

// export default function App() {
//   return(
//
//     <View style= {styles.container}>
//     <Text>Create an Account</Text>
//     <TextInput placeholder="Email" style={styles.textInput}/>
//     <TextInput placeholder="Password" style={styles.textInput}/>
//     <Button title="LOGIN" />
//   </View>);
// };
//
// const styles = StyleSheet.create({
//   topPart: {
//     padding:20,
//   },
//   container: {
//     top: 250,
//     padding: 50,
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   textInput: {
//     width: '100%',
//     borderBottomColor: 'green',
//     borderBottomWidth: 1,
//     padding:20
//   },
// });
