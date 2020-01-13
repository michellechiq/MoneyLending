import React from 'react';
import { View, TouchableOpacity, Text, Button, TextInput, StyleSheet } from 'react-native';

const getAvailableRoutes = navigation => {
  let availableRoutes = [];
  if (!navigation) return availableRoutes;

  const parent = navigation.dangerouslyGetParent();
  if (parent) {
    if (parent.router && parent.router.childRouters) {
      // Grab all the routes the parent defines and add it the list
      availableRoutes = [
        ...availableRoutes,
        ...Object.keys(parent.router.childRouters),
      ];
    }

    // Recursively work up the tree until there are none left
    availableRoutes = [...availableRoutes, ...getAvailableRoutes(parent)];
  }

  // De-dupe the list and then remove the current route from the list
  return [...new Set(availableRoutes)].filter(
    route => route !== navigation.state.routeName
  );
};


const SignUp1 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A9FBD7',
      }}
    ><Text>Create an Account</Text>
        <TextInput placeholder="Email Address" style={styles.textInput}/>
        <Button title="Next" onPress ={() => this.props.navigation.navigate('SignIn')} />
      {getAvailableRoutes(navigation).map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route)}
          key={route}
          style={{
            backgroundColor: '#fff',
            padding: 10,
            margin: 10,
          }}
        >
          <Text>{route}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SignUp1;
const styles = StyleSheet.create({
  topPart: {
    padding:20,
  },
  container: {
    top: 250,
    padding: 50,
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
