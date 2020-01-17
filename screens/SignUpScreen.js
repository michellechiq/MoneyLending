import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, CheckBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class SignUp1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A9FBD7' }}>
        <Text style = {{fontWeight: 'bold', top: -300, fontSize: 20}}>Create an Account</Text>
        <TextInput placeholder="Email Address" style={styles.textInput}/>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Sign2')}
        />
      </View>
    );
  }
}

class SignUp2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A9FBD7' }}>
      <Text>Create an Account</Text>
      <TextInput placeholder="Username" style={styles.textInput}/>
      <TextInput placeholder="Password" style={styles.textInput}/>
      <TextInput placeholder="Re-Enter Password" style={styles.textInput}/>

        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Sign3')}
        />

      </View>
    );
  }
}
class SignUp3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A9FBD7' }}>
        <Text>Set Up Your Account</Text>
        <TextInput placeholder="First Name" style={styles.textInput}/>
        <TextInput placeholder="Last Name" style={styles.textInput}/>
        <View style = {{padding: 80}}><Text>Upload Valid Photo ID:</Text>
        <Button
          title="Submit"
          onPress={() => this.props.navigation.navigate('Sign4')}
        /></View>
      </View>

    );
  }
}

class SignUp4 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A9FBD7' }}>
        <Text style = {{fontWeight: 'bold', top: -250, fontSize: 30}}>Verification Status</Text>
      </View>

    );
  }
}

const RootStack = createStackNavigator(
  {
    Sign1: {
      screen: SignUp1,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7',
          shadowColor: 'transparent'
        },
      },

    },
    Sign2: {
      screen: SignUp2,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7',
          shadowColor: 'transparent'
        },
      },

    },
    Sign3: {
      screen: SignUp3,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7',
          shadowColor: 'transparent'
        },
      },

    },
    Sign4: {
      screen: SignUp4,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7',
          shadowColor: 'transparent'
        },
      },
    },
  },
  {
    initialRouteName: 'Sign1',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding:20
  },
});
