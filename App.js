/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import FacebookSignIn from './components/SignInAndSignUp/FacebookSignIn'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <NativeRouter>
      <View style={styles.container}>
        <FacebookSignIn/>
      </View>
     </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
   android: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
   }
  })
});
