import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A9FBD7' }}>
        <Text>Create an Account</Text>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#A9FBD7' }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#A9FBD7' }}>
        <Text>Set Up Your Account</Text>
        <TextInput placeholder="First Name" style={styles.textInput}/>
        <TextInput placeholder="Last Name" style={styles.textInput}/>
        <Button
          title="Submit"
          onPress={() => this.props.navigation.navigate('Submit')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Create: HomeScreen,
    Sign2: SignUp2,
    Sign3: SignUp3,
  },
  {
    initialRouteName: 'Create',
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

// import React from 'react';
// import { View, TouchableOpacity, Text, Button, TextInput, StyleSheet } from 'react-native';
//
// const getAvailableRoutes = navigation => {
//   let availableRoutes = [];
//   if (!navigation) return availableRoutes;
//
//   const parent = navigation.dangerouslyGetParent();
//   if (parent) {
//     if (parent.router && parent.router.childRouters) {
//       // Grab all the routes the parent defines and add it the list
//       availableRoutes = [
//         ...availableRoutes,
//         ...Object.keys(parent.router.childRouters),
//       ];
//     }
//
//     // Recursively work up the tree until there are none left
//     availableRoutes = [...availableRoutes, ...getAvailableRoutes(parent)];
//   }
//
//   // De-dupe the list and then remove the current route from the list
//   return [...new Set(availableRoutes)].filter(
//     route => route !== navigation.state.routeName
//   );
// };
//
//
// const SignUp1 = ({ navigation }) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#A9FBD7',
//       }}
//     ><Text>Create an Account</Text>
//         <TextInput placeholder="Email Address" style={styles.textInput}/>
//         <Button title="Next" onPress ={() => this.props.navigation.navigate('SignUp2')} />
//       {getAvailableRoutes(navigation).map(route => (
//         <TouchableOpacity
//           onPress={() => navigation.navigate(route)}
//           key={route}
//           style={{
//             backgroundColor: '#fff',
//             padding: 10,
//             margin: 10,
//           }}
//         >
//           <Text>{route}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };
//
// export default SignUp1;
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
