import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import {Actions, ActionConst} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native'; 

export default class LoginScreen extends Component {
  render() {
    this.displayData();
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit />
      </Wallpaper>
    );
  }
  displayData = async ()=>{  
    try{  
      let login = await AsyncStorage.getItem('login');  
      console.log(login);
      if (login!=null){
        console.log(login);
        Actions.secondScreen(); 
      }
      
    }  
    catch(error){  
      alert(error)  
    }  
  }  
}
