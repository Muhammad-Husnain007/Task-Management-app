import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { MainTab } from '../Navigations/Routing';
// import {MainTab}  from '../Navigations/Routing';

import { useNavigation } from '@react-navigation/native';
import AllNavbar from './Navbar/AllNavbar';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const signinForm = async () => {
    const formData = {
      email,
      password
    };

    setEmail("");
    setPassword("");
    try {
      const response = await fetch('http://192.168.0.102:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('login data sent successfully!');
       navigation.navigate('Bottom')

      } else {
        if (response.status === 401) {
          setErrorMessage("Invalid email or password");
        } else {
          console.error('Error in sign-in:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };
  const notSignup = () => {
    navigation.navigate('Signup')
  }
  return (
    <View>
      <View>
      <AllNavbar title={'Sign In'} />
        {/* <Image source={require('../assests/signup-image.webp')}
          style={styles.signupImage} /> */}
          <View style={styles.welcomeView}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.pleaseText}>Please Inter your email address and password for Login</Text>
          </View>
      </View>
      <View style={styles.form}>
        {/* <Text style={styles.labelText}>Enter Email:</Text> */}
        <TextInput style={styles.inputfields} placeholder='Enter Your Email' value={email} onChangeText={setEmail} />
        {/* <Text style={styles.labelText}>Enter Password:</Text> */}
        <TextInput style={styles.inputfields} placeholder='Enter Your Password' value={password} onChangeText={setPassword} secureTextEntry={true} />
        <Text  style={styles.forgotText}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button} onPress={signinForm}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
           <Image source={require('../assests/signIn.png')}
          style={styles.signWith} />
        <Text onPress={notSignup} style={{color: 'blue', marginTop: 20, marginLeft: 20}}>If you are arledy signuUp go to Login</Text>

      </View>
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 800,
    paddingTop: 20,
  },
  welcomeView:{
width: 234,
height: 88,
// backgroundColor: 'green',
 marginLeft: 20, 
 marginTop: 40
  },
  welcomeText: {
fontSize: 22,

  },
  pleaseText: {
    fontSize: 15,
    marginTop: 10,
    color: "#F7F8F8"
    
      },
      forgotText: {
marginLeft: 230,
marginTop: 10
      },
  inputfields: {
    width: 327,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgrey',
    paddingHorizontal: 10,
    marginLeft: 14,
    marginTop: 40

  },
  // labelText: {
  //   marginLeft: 60,
  //   marginTop: 30,
  //   color: 'green'
  // },
  button: {
    backgroundColor: 'cyan', // Set your button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 327,
    height: 57,
    marginLeft: 14,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#756EF3',
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    // marginLeft: 22,

  },
  signWith: {
    width: 100,
    height: 100,
    marginLeft: 130,
    marginTop: 10,
    resizeMode: "contain"

  }
});

export default Signin;
