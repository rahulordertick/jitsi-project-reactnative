import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    ActivityIndicator
} from 'react-native';
import Logo from './Logo';
import {Actions, ActionConst} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native'; 
import axios from 'axios';
import Wallpaper from './Wallpaper';
import SignupSection from './SignupSection';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }
constructor(){
    super();
    this.displayData();
}
    _userLogin = () => {
       
        this.setState({ isLoggingIn: true, message: '' });

        var params = {
            username: this.state.username,
            password: this.state.password,
            grant_type: 'password'
        };
this._callApi();
        var formBody = [];
        for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        var proceed = false;
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    render() {
        
        return (
            // <ScrollView style={{padding: 20}}>
                <Wallpaper>
                <Logo />
                <View style={{padding:20}}>
                <Text 
					style={{fontSize: 27},{color:'white'}}>
					Login
				</Text>
				<TextInput
					ref={component => this._username = component}
					placeholder='Username' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
					onFocus={this.clearUsername}
				/>
				<TextInput 
					ref={component => this._password = component}
					placeholder='Password' 
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					onFocus={this.clearPassword}
					onSubmitEditing={this._userLogin}
				/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<Button 
					disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
		      		onPress={this._userLogin}
		      		title="Submit"
		      	/>
                </View>
                
                  <SignupSection />
                </Wallpaper>
				
	    //   </ScrollView>
        )
    }
    _callApi(){
        axios.post('https://demo.racloop.com/api/auth/login', {
          username: this.state.username,
          password: this.state.password
        })
        .then(function (response) {
          console.log(response.data);
          AsyncStorage.setItem('login', JSON.stringify(response.data)); 
          Actions.secondScreen(); 
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.response);
        });
      }
      displayData = async ()=>{  
        try{  
          let login = await AsyncStorage.getItem('login');  
          console.log(login);
          if (login!=null){
            const responseData=JSON.parse(login);
            console.log(responseData['token']);
            Actions.secondScreen();
          }
          
        }  
        catch(error){  
          alert(error)  
        }  
      }
}