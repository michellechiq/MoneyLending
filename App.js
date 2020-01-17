import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Homepage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
      <Text style = {{fontWeight: 'bold',fontSize:32 }}>LEND</Text>

      <Image style = {{width: 400, height: 400, padding: 50}} source= {require('./img/lendlogo.png')}/>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Log1')}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Sign1')}
        />
        <Button
          title="Lender"
          onPress={() => this.props.navigation.navigate('Lender')}
        />

      </View>
    );
  }
}
class Login1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', bottom:10, backgroundColor: '#E8FEEA' }}>
        <TextInput placeholder="Email Address" style={styles.textInput}/>
        <TextInput placeholder="Password" style={styles.textInput}/>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
      <Text style = {{fontWeight: 'bold', bottom:55, fontSize:32 }}><Image style = {{width: 38, height: 38}} source= {require('./img/checkMark.png')}/> Verified</Text>

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
        <Text style = {{fontSize:22, bottom: 50}}>Banking Information</Text>
        <TextInput placeholder="Name of Bank" style={styles.textInput}/>
        <TextInput placeholder="Account Number" style={styles.textInput}/>
        <TextInput placeholder="9 Digit Routing Number" style={styles.textInput}/>
        <View style = {{padding: 30, fontSize: 20}}><Text style = {{top:30}}>Type of Account</Text>
        <Text style = {styles.textRight}>Checking</Text>
        <Text style = {styles.textLeft}>Saving</Text>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#E8FEEA' }}>
        <Text style = {{fontSize:22, bottom: 155}}>Lender's Page</Text>
        <Text style = {{fontSize:22, bottom: 150}}>$2000.00</Text>
        <TextInput placeholder="Remainder Credit Line" style ={styles.text2}/>
        <Text style = {{fontSize:22, bottom: 150}}>-$300.00</Text>
        <TextInput placeholder="Pending Loans" style={styles.text2}/>
        <TextInput placeholder="  Search Bar" style ={styles.text3}/>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 10}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="jdoe24" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $4010</Text></View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 10}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="jdoe24" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $2030</Text></View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 10}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="jdoe24" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $1160</Text></View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 10}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="jdoe24" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $3620</Text></View>

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#E8FEEA' }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#E8FEEA' }}>
        <Text style = {{fontSize:22, bottom: 200}}>Profile View: </Text>
        <Text style = {{fontSize:15, bottom: 200, color:'green'}}>Borrower</Text>
        <Text style = {{fontSize:30, bottom: 170, padding: 50}}>IMAGE GOES HERE</Text>
        <Text style = {{fontSize:22, bottom: 150}}>Jane Doe</Text>
        <Text style = {{fontSize:15, bottom: 150}}>jdoe24</Text>


      </View>

    );
  }
}
class SignUp1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
        <Text>Set Up Your Account</Text>
        <TextInput placeholder="First Name" style={styles.textInput}/>
        <TextInput placeholder="Last Name" style={styles.textInput}/>
        <View style = {{padding: 90}}><Text style = {{padding: 20}}>Upload Valid Photo ID:</Text>
        <Image style = {{width: 220, height: 180, padding: 50}} source= {require('./img/placeholder.jpg')}/>
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
        <Text style = {{fontWeight: 'bold', top: -250, fontSize: 30}}>Verification Status</Text>
      </View>

    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Homepage,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },
    },
    Log1: {
      screen: Login1,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },
    },
    Log2: {
      screen: Login2,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },

    },
    Log3: {
      screen: Login3,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },
    },
    Lender: {
      screen: Lending,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },
    },
    Borrower: {
      screen: Borrowing,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },
    },
    ProfileB: {
      screen: ProfB,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },
    },
    Sign1: {
      screen: SignUp1,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },
    },
    Sign2: {
      screen: SignUp2,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },

    },
    Sign3: {
      screen: SignUp3,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },

    },
    Sign4: {
      screen: SignUp4,
      navigationOptions: {
        headerTitle:'',
        headerStyle: {
          backgroundColor:'#E8FEEA',
          shadowColor: 'transparent'
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
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
    width: '80%',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding:15
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
  textRight: {
    width: '15%',
    fontSize: 15,
    right: 100,
    top:45,
    padding: 10,
    margin: 20,
    textAlign: 'left'
  },
  textLeft: {
    width: '15%',
    fontSize: 15,
    left: 100,
    bottom:60,
    margin: 20,
    textAlign: 'right'
  }
});






//
//
// import React from 'react';
// import { View, TouchableOpacity, Text, Button, TextInput, StyleSheet } from 'react-native';
// import Example from './screens/Example';
// import LoginScreen from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
//
//
// const AuthStack = createStackNavigator({
//   Landing: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Homepage',
//     },
//   },
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: {
//       headerTitle: 'Login',
//     },
//   },
//   SignUp: {
//     screen: SignUpScreen,
//     navigationOptions: {
//       headerTitle: 'Sign Up',
//     },
//   },
//
// });
//
// const App = createSwitchNavigator({
//   Start: {
//     screen: AuthStack,
//   },
//
// });
//
//
// export default createAppContainer(App);
