import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, Image, AppRegistry, TouchableOpacity} from 'react-native';
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
        <Button
          title="Borrower"
          onPress={() => this.props.navigation.navigate('Borrower')}
        />

      </View>
    );
  }
}
class Login1 extends React.Component {
  constructor() {
    super();

    this.state = { hidePassword: true }
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style = {{fontSize: 20, bottom: 110}}> LOGIN </Text>
      <TextInput placeholder=" Email Address" style={styles.textBox}/>
        <View style={styles.textBoxContainer}>
          <TextInput underlineColorAndroid="transparent" secureTextEntry={this.state.hidePassword} style={styles.textBox} placeholder=" Password" />
          <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
            <Image source={(this.state.hidePassword) ? require('./img/hidePassword.png') : require('./img/showPassword.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
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
        <TextInput placeholder="Name of Bank" style={styles.textBox}/>
        <TextInput placeholder="Account Number" style={styles.textBox}/>
        <TextInput placeholder="9 Digit Routing Number" style={styles.textBox}/>
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
        <Text style = {{fontSize:22, bottom: 150}}>$6000.00</Text>
        <TextInput placeholder="Remainder Credit Line" style ={styles.text2}/>
        <Text style = {{fontSize:22, bottom: 150}}>-$300.00</Text>
        <TextInput placeholder="Pending Loans" style={styles.text2}/>
        <TextInput placeholder="  Search Bar" style ={styles.text3}/>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 10}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="Nadine16" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $4010</Text></View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 10}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="Nadine16" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $2030</Text></View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 10}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="Nadine16" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $1160</Text></View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between', bottom: 100, padding: 10}}><Button style= {{fontSize:20, justifyContent: 'space-between'}} title ="Nadine16" onPress={() => this.props.navigation.navigate('ProfileB')}/><Text style= {{fontSize:20, justifyContent: 'space-between', padding: 8}}> $3620</Text></View>

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
        <Text style = {{fontSize:22, bottom: 200}}>Borrower's Page</Text>
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
        <Text style = {{fontSize:22, bottom: 130}}>Profile View: </Text>
        <Text style = {{fontSize:15, bottom: 130, color:'green'}}>Borrower</Text>
        <Text style = {{fontSize:15, bottom: 120, color:'green'}}><Image style = {{width: 180, height: 140}} source= {require('./img/profile.jpg')}/></Text>
        <Text style = {{fontSize:22, bottom: 120}}>Nadine Rodriguez</Text>
        <Text style = {{fontSize:15, bottom: 120}}>Nadine16</Text>
        <Image style = {{width: 100, height: 100, bottom: 120}} source= {require('./img/ratings.png')}/>
        <Text style={styles.textBox2}> I need to buy a new laptop...</Text>
        <TextInput placeholder="$500.00" style={styles.textBox3}/>
        <Button
          title="LEND"
          onPress={() => this.props.navigation.navigate('')}
        />


      </View>

    );
  }
}
class SignUp1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
        <Text style = {{fontWeight: 'bold', bottom: 140, fontSize: 20}}>Create an Account</Text>
        <TextInput placeholder="Email Address" style={styles.textBox}/>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Sign2')}
        />
      </View>
    );
  }
}

class SignUp2 extends React.Component {
  constructor() {
    super();

    this.state = { hidePassword: true }
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8FEEA' }}>
      <Text style = {{fontWeight: 'bold', bottom: 140, fontSize: 20}}>Create a Username and Password</Text>
      <TextInput placeholder=" Username" style={styles.textBox}/>
      <View style={styles.textBoxContainer}>
        <TextInput underlineColorAndroid="transparent" secureTextEntry={this.state.hidePassword} style={styles.textBox} placeholder=" Password" />
        <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
          <Image source={(this.state.hidePassword) ? require('./img/hidePassword.png') : require('./img/showPassword.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>

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
        <Text style = {{fontWeight: 'bold', bottom: 25, fontSize: 20}}>Set Up Your Account</Text>
        <TextInput placeholder="First Name" style={styles.textBox}/>
        <TextInput placeholder="Last Name" style={styles.textBox}/>
        <View style = {{padding: 30}}><Text style = {{padding: 20}}>Upload Valid Photo ID:</Text>
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
        <Text style = {{fontWeight: 'bold', bottom: 180, fontSize: 30}}>Verification Status</Text>
        <Text style = {{fontWeight: 'bold', fontSize: 20}}>STATUS BAR GOES HERE</Text>
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
    width: '100%',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding:15
  },
  text2: {
    width: '40%',
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
  },
  // Password StyleSheet
  container: {
    backgroundColor:'#E8FEEA',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

    },
    headerText: {
      fontSize: 25,
      textAlign: "center",
      margin: 10,
      color: 'black',
      fontWeight: "bold"
    },
    textBoxContainer: {
      position: 'relative',
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    textBox: {
      fontSize: 16,
      alignSelf: 'stretch',
      height: 45,
      paddingRight: 45,
      paddingLeft: 8,
      borderWidth: 1,
      paddingVertical: 0,
      borderColor: 'green',
      borderRadius: 5,
    },
    textBox2: {
      fontSize: 16,
      width: '60%',
      height: 20,
      paddingRight: 20,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 5,
      bottom: 120
    },
    textBox3: {
      fontSize: 16,
      width: '20%',
      height: 20,
      paddingRight: 20,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 5,
      bottom: 100
    },
    touachableButton: {
      position: 'absolute',
      right: 3,
      height: 40,
      width: 35,
      padding: 2
    },
    buttonImage: {
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
    },
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
