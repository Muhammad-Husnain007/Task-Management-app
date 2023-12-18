import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Chat from '../Chat'; // Import other screens
import { Image } from 'react-native';
import Folder from '../Folder';
import Profile from '../Profile';
import UploadData from '../UploadData';

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let imageSource;

          if (route.name === 'Home') {
            imageSource = focused ? require('../../../assests/Home_outline.png') : require('../../../assests/Home.png');
          } 
          else if (route.name === 'Folder') {
            imageSource = focused ? require('../../../assests/Folder_outline.png') : require('../../../assests/Folder.png');
          }  else if (route.name === 'Upload') {
            imageSource = focused ? require('../../../assests/Add.png') : require('../../../assests/Add.png');
          }
          else if (route.name === 'Chat') {
            imageSource = focused ? require('../../../assests/Chat_outline.png') : require('../../../assests/Chat.png');
          } else if (route.name === 'Profile') {
            imageSource = focused ? require('../../../assests/Profile_outline.png') : require('../../../assests/Profile.png');
          }

          return <Image source={imageSource} style={{ width: size, height: size, tintColor: color }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Folder" component={Folder} />
      <Tab.Screen name="Upload" component={UploadData} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* Add more screens as needed */}
    </Tab.Navigator>
  );
}
