import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import AllNavbar from '../../LoginSignup/Navbar/AllNavbar';


const Chat = () => {
  return (
    <ScrollView style={styles.container}>
     <View style={styles.allView}>
     <AllNavbar leftImageSource={require('../../assests/Menu.png')} title={"Fiday 26"} rightImageSource={require('../../assests/Notifications.png')} />
        {/* <Text style={styles.letsText}>Let`s make a habits together</Text> */}
     </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
     width: '100%',
     height: '100%'

  },
  allView: {
     width: "100%",
     height: 300,
     backgroundColor : 'green',
display: 'flex',
flexDirection: 'column',

   },
//      letsText: {
//         fontSize: 22,
//   color: 'black'
//       },

});


export default Chat
