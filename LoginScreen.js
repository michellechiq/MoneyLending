import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, CheckBox, TouchableOpacity,FlatList,AppRegistry,Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class Login1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', bottom: 80, backgroundColor: '#A9FBD7' }}>
        <Text style = {{fontWeight: 'bold', top: -150, fontSize: 20}}>Login</Text>
        <TextInput placeholder="Email Address" style={styles.textInput}/>
        <TextInput placeholder="Password" style={styles.textInput}/>
        <TextInput placeholder="Re-Enter Password" style={styles.textInput}/>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Log2')}
        />
      </View>
    );
  }
}

class Login2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#A9FBD7' }}>
      <Text style = {{fontWeight: 'bold', bottom:55, fontSize:32 }}>Verified</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Log3')}
        />

      </View>
    );
  }
}
class Login3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#A9FBD7' }}>
        <Text style = {{fontSize:22, bottom: 50}}>Banking Information</Text>
        <TextInput placeholder="Name of Bank" style={styles.textInput}/>
        <TextInput placeholder="Account Number" style={styles.textInput}/>
        <TextInput placeholder="9 Digit Routing Number" style={styles.textInput}/>
        <View style = {{padding: 80}}><Text>Type of Account</Text>
        <Button
          title="Submit"
          onPress={() => this.props.navigation.navigate('Lender')}
        /></View>
      </View>

    );
  }
}
class Lending extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#A9FBD7' }}>
        <Text style = {{fontSize:22, bottom: 200}}>Lend</Text>
        <TextInput placeholder="Name of Bank" style={styles.textInput}/>
        <TextInput placeholder="Account Number" style={styles.textInput}/>
        <Button
          title="Switch To Borrower"
          onPress={() => this.props.navigation.navigate('Borrower')}
        />
      </View>

    );
  }
}

class Borrowing extends React.Component {
  constructor(props)
 {
   super(props);

   this.state = { GridViewItems: [
     {key: 'One'},
     {key: 'Two'},
     {key: 'Three'},
     {key: 'Four'},
     {key: 'Five'},
     {key: 'Six'},
     {key: 'Seven'},
     {key: 'Eight'},
     {key: 'Nine'},
     {key: 'Zero'}
   ]}
 }
GetGridViewItem (item) {

Alert.alert(item);

}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#A9FBD7' }}>
        <Text style = {{fontSize:22, bottom: 200}}>Borrow</Text>
        <TextInput placeholder="200" style={styles.textInput2}/>
        <TextInput placeholder="Account Number" style={styles.textInput2}/>
        <Button
        title="Borrow as anonymous"
        color=" #cccac9"
        onPress={this.handlepress}
        />
        <Text style= {{fontSize:20, bottom: 120}}> Interest Rate: </Text>
        <TextInput placeholder="10%" style={styles.textInput3}/>
        <TextInput placeholder="1" style={styles.textInput4}/>
        <TextInput placeholder="2" style={styles.textInput5}/>
        <TextInput placeholder="3" style={styles.textInput6}/>
        <TextInput placeholder="4" style={styles.textInput7}/>
        <TextInput placeholder="5" style={styles.textInput8}/>
        <TextInput placeholder="6" style={styles.textInput9}/>
        <TextInput placeholder="7" style={styles.textInput10}/>
        <TextInput placeholder="9" style={styles.textInput11}/>
        <TextInput placeholder="0" style={styles.textInput12}/>




    </View>

    );
  }
  handlepress = () => {
  }
}

const RootStack = createStackNavigator(
  {
    Log1: {
      screen: Login1,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7'
        },
      },

    },
    Log2: {
      screen: Login2,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7'
        },
      },

    },
    Log3: {
      screen: Login3,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7'
        },
      },
    },
    Lender: {
      screen: Lending,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7'
        },
      },
    },
    Borrower: {
      screen: Borrowing,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#A9FBD7'
        },
      },
    },
  },
  {
    initialRouteName: 'Log1',
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
  textInput2: {
    width: '50%',
    borderColor: '#54e2a5',
    borderWidth: 5,
    backgroundColor:'white',
    fontSize: 25,
    bottom:120,
    padding:10,
    margin: 15,
    textAlign:'left'

  },
  textInput3: {
    width: '25%',
    borderColor: '#54e2a5',
    borderWidth: 5,
    fontSize: 10,
    bottom:120,
    padding:10,
    margin: 15,
    textAlign:'left'

  },
  textInput4:{
    width: '15%',
    borderColor: '#54e2a5',
    borderWidth: 5,
    fontSize: 10,
    bottom:100,
    right:75,
    padding:10,
    margin: 15,
    borderRadius: 20,
    textAlign:'left'
  },
  textInput5:{
    width: '15%',
    borderColor: '#54e2a5',
    borderWidth: 5,
    fontSize: 10,
    bottom:172,
    right:10,
    padding:10,
    margin: 15,
    borderRadius: 20,
    textAlign:'left'
  },
  textInput6:{
    width: '15%',
    borderColor: '#54e2a5',
    borderWidth: 5,
    fontSize: 10,
    bottom:245,
    left:60,
    padding:10,
    borderRadius: 20,
    margin: 15,
    textAlign:'left'
  },
  textInput7:{
    width: '15%',
    borderColor: '#54e2a5',
    borderRadius: 20,
    borderWidth: 5,
    fontSize: 10,
    bottom:265,
    left:60,
    padding:10,
    margin: 15,
    textAlign:'left'
  },
  textInput8:{
    width: '15%',
    borderColor: '#54e2a5',
    borderRadius: 20,
    borderWidth: 5,
    fontSize: 10,
    top:150,
    left:50,
    padding:10,
    margin: 15,
    textAlign:'left'
  },
});
