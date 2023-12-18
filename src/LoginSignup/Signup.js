import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AllNavbar from './Navbar/AllNavbar';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const submitForm = async () => {
    const formData = {
      name,
      email,
      password,
      confirmPassword,
      // phone,
      // gender
    };

    try {
      const response = await fetch('http://192.168.0.102:3000/User/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully!');
        navigation.navigate('Signin');
      } else {

        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  }
  const alredySignup = () => {
    navigation.navigate('Signin')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
      <AllNavbar title={'Sign Up'} />
        {/* <Image source={require('../assests/signup-image.webp')}
          style={styles.signupImage} /> */}
          <View style={styles.createView}>
            <Text style={styles.createText}>Create Account</Text>
            <Text style={styles.pleaseText}>Please Inter your Informatioin and create your account</Text>
          </View>
      </View>
      <View style={styles.form}>
        {/* <Text style={styles.labelText}>Name*</Text> */}
        <TextInput style={styles.inputfields} placeholder='Enter Your Name' value={name} onChangeText={setName} />
        {/* <Text style={styles.labelText}>Email*</Text> */}
        <TextInput style={styles.inputfields} placeholder='Enter Your Email' value={email} onChangeText={setEmail} />
        {/* <Text style={styles.labelText}>Password*</Text> */}
        <TextInput style={styles.inputfields} placeholder='Enter Your Password' secureTextEntry={true} value={password} onChangeText={setPassword} />
        {/* <Text style={styles.labelText}>Confirm Password*</Text> */}
        <TextInput style={styles.inputfields} placeholder='Enter Confirm Password' secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />
        <TouchableOpacity style={styles.button} onPress={submitForm}>
          <Text style={styles.buttonText}>Signup</Text>
          <Image source={require('../assests/signIn.png')}
          style={styles.signWith} />
        </TouchableOpacity>
        <Text onPress={alredySignup} style={{color: 'blue', marginTop: 20, marginLeft: 20}}>If you are arledy signuUp go to Login</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 800,
    paddingTop: 20,
  },
  createView:{
    width: 234,
    height: 88,
    // backgroundColor: 'green',
     marginLeft: 20, 
     marginTop: 40
      },
      createText: {
    fontSize: 22,
    
      },
      pleaseText: {
        fontSize: 15,
        marginTop: 10,
        color: "#F7F8F8"
        
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

export default Signup;