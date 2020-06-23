import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import App from './App';
import Login from './Login';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={Login}
	        	animation='fade'
	          hideNavBar={true}WelcomePage
	          initial={true}
	        />
	        <Scene key="secondScreen"
	          component={App}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}