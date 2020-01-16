import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, CheckBox, SearchBar } from 'react-native';
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
        <Text style = {{fontSize:22, bottom: 175}}>Lend</Text>
        <Text style = {{fontSize:22, bottom: 150}}>$2000.00</Text>
        <TextInput placeholder="Remainder Credit Line" style ={styles.text2}/>
        <Text style = {{fontSize:22, bottom: 150}}>-$300.00</Text>
        <TextInput placeholder="Pending Loans" style={styles.text2}/>
        <TextInput placeholder="  Search Bar" style ={styles.text3}/>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 5}}><Text style= {{fontSize:20, justifyContent: 'space-between'}}>User1 </Text><Text style= {{fontSize:20, justifyContent: 'space-between'}}> $400</Text></View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 5}}><Text style= {{fontSize:20, justifyContent: 'space-between'}}>User2 </Text><Text style= {{fontSize:20, justifyContent: 'space-between'}}> $450</Text></View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 5}}><Text style= {{fontSize:20, justifyContent: 'space-between'}}>User3 </Text><Text style= {{fontSize:20, justifyContent: 'space-between'}}> $2500</Text></View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 5}}><Text style= {{fontSize:20, justifyContent: 'space-between'}}>User4 </Text><Text style= {{fontSize:20, justifyContent: 'space-between'}}> $20</Text></View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 5}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="jdoe24" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $400</Text></View>

        <Button
          title="Switch To Borrower"
          onPress={() => this.props.navigation.navigate('Borrower')}
        />
      </View>

    );
  }
}
class Borrowing extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#A9FBD7' }}>
        <Text style = {{fontSize:22, bottom: 200}}>Borrow</Text>
        <TextInput placeholder="Name of Bank" style={styles.textInput}/>
        <TextInput placeholder="Account Number" style={styles.textInput}/>
        <TextInput placeholder="9 Digit Routing Number" style={styles.textInput}/>
        <Button
          title="Switch To Lender"
          onPress={() => this.props.navigation.navigate('Lender')}
        />
      </View>

    );
  }
}
class ProfB extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#A9FBD7' }}>
        <Text style = {{fontSize:22, bottom: 200}}>Profile View: </Text>
        <Text style = {{fontSize:15, bottom: 200, color:'green'}}>Borrower</Text>
      </View>

    );
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
    ProfileB: {
      screen: ProfB,
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
  text2: {
    width: '35%',
    borderTopColor: 'green',
    borderTopWidth: 1,
    bottom:150
  },
  text3: {
    width: '65%',
    borderTopColor: 'green',
    borderBottomColor: 'green',
    borderLeftColor: 'green',
    borderRightColor: 'green',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    bottom:130
  },
});
