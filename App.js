/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
MAIN FUNDAMENTAL PARADIGMS IN REACT-NATIVE
1-COMPONENTS
      i-core components eg: view ,scrollview,text etc
      ii-custom components same as custom widgets like in flutter which we crerate by nesting the core components
2-JSX
    Both React js and React native based on JSX jsx is not a rocket sience but actually a javascript 
3-PROPS 
    Props are actually properties of a class component or functional component. We can also call it arguments/parameters But its little more dynamic
4-STATE
    So state is same as flutter state. State is actually nothing but DATA which we changed with user interaction and rebuild the ui 
    so here in react-native we manage state using HOOKS hooks are features of react native which help us in many problems
    for example 
              1-{count,setCount}=UseState(0)=> for functional components
              2-setState{
                  count:0                  ==> for Class Components
              }
                    and then use it all over the class like this ==> this.setState(count:1)
 */

// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';


// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center',
//     alignItems:'center'
//   }
// })

// const Umbarakulations=(Props)=>{
//   return <Text
//   style={styles.center}>
//    {Props.name} Umbarak sha ! 
//   </Text>
// }

// const LotsOfGreetings=()=>{
//   return <View style={[styles.center, {top: 50}]} >
//     <Umbarakulations 
//         name='uzairleo'
//     />
//     <Umbarakulations
//     name="chandrigarh babu"/>
//     <Umbarakulations
//     name="Dontor sare"
//     />
//     <image>

//     </image>
//      </View>
// }
// export default LotsOfGreetings;

// import React, { Component, } from 'react';
// import { View, Text, Image, StyleSheet, Button, TouchableOpacity, } from 'react-native';

// class MainApp extends Component {
//   state = {
//     count=0
//   }

//   onPress = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }


//   render() {
//     return (<View style={styles.container}>

//       <TouchableOpacity
//         onPress={this.onPress}
//       >
//         <Image

//           style={[styles.tinyLogo, { left: 100 }]}
//           source={{
//             uri: 'https://reactnative.dev/img/tiny_logo.png',
//           }}
//         />
//       </TouchableOpacity>

//       <Text style={{ alignContent: 'center', alignItems: 'center', top: 100, textAlign: 'center', fontSize: 20 }}>
//         You have click the button this may times= {this.state.count}</Text>
//       <View style={{ top: 300, right: 40, left: 10, }}><Button
//         style={{
//           flex: 5,
//           justifyContent: 'bottom',
//           alignItems: 'bottom'
//         }}

//         onPress={this.onPress}
//         title='Click me '
//       /></View>
//     </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 150,
//     height: 150,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },

// });


// export default MainApp;


import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Button,
} from 'react-native'

class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    console.log("ONPRESSED execute finally")
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.onPress}
          >
            <Image
              style={[styles.tinyLogo, { left: 10 }]}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </TouchableOpacity>

          <Text style={{ alignContent: 'center', alignItems: 'center', top: 60, textAlign: 'center', fontSize: 20 }}>
            You have click the button this may times= {this.state.count}</Text>
          <View
          style={{top:300,paddingVertical:10,}}>

            <Button
              onPress={this.onPress}
              title='Click me '
            />
            </View>
          <View
          style={{top:300,paddingVertical:10,}}>

            <Button
              style={{
                flex: 3,
                backgroundColor: 'black',
                justifyContent: 'bottom',
                alignItems: 'bottom'
              }}
              color='#DDDDDD'
              onPress={() => {
                console.log("COUNTER RESETs Successfully");
                this.setState({
                  count: 0
                })
              }}
              title='Reset '
            />
            
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  container: {
    backgroundColor: '#6ED4C8',
    paddingTop: 150,
    paddingVertical: 300,
    marginBottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  logo: {
    width: 66,
    height: 58,
  },
})

export default App;