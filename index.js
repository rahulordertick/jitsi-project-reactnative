/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
import App from './App';
import LoginScreen from './LoginScreen';
import {name as appName} from './app.json';
import Main from './Main';
import React, { Component } from 'react';

export default class loginAnimation extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Main />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
  });
// AppRegistry.registerComponent(appName, () => LoginScreen);
   AppRegistry.registerComponent(appName, () => loginAnimation);
