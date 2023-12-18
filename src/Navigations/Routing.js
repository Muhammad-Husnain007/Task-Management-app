import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Signup from '../LoginSignup/Signup';
import Signin from '../LoginSignup/Signin';
import SplashScreen from '../AllScreens/Splash/SplashScreen';
import GetStarted from '../AllScreens/StartScreen/GetStarted';
import MySlider from '../AllScreens/StartScreen/MySlider';
import Home from '../AllScreens/HomeScreen/Home';
import BottomNavbar from '../AllScreens/HomeScreen/Navbar/BottomNavbar';
// import Folder from '../AllScreens/HomeScreen/Folder';
// import UploadData from '../AllScreens/HomeScreen/UploadData';
// import Chat from '../AllScreens/HomeScreen/Chat';
// import Profile from '../AllScreens/HomeScreen/Profile';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Bottom">
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Statrted" component={GetStarted} />
    <Stack.Screen name="Slider" component={MySlider} />
    <Stack.Screen name="Home" component={Home} />
    {/* <Stack.Screen name="Folder" component={Folder} />
    <Stack.Screen name="Upload" component={UploadData} />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="Profile" component={Profile} /> */}
    <Stack.Screen name="Bottom" component={BottomNavbar} />
  </Stack.Navigator>
);

const MainTab = () => (

  <Tab.Navigator
    initialRouteName="User"
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: 'blue',
  //   },
  //   headerTintColor: 'orange',
  //   headerTitleStyle: {
  //     fontSize: 25,
  //   },
  // }}
  >
    {/* <Tab.Screen name="Home" component={Home} /> */}
    {/* <Tab.Screen name="About" component={About} /> */}
    {/* <Drawer.Screen name="User" component={UserAds} /> */}

  </Tab.Navigator>

);
const MainDrawer = () => {
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    {/* <Drawer.Screen name="About" component={About} /> */}
  </Drawer.Navigator>


}
const Routing = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <MainDrawer /> */}
      {/* <MainTab /> */}
    </NavigationContainer>
  );
};

export default Routing;

