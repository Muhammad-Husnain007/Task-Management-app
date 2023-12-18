import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import AllNavbar from '../../LoginSignup/Navbar/AllNavbar';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.allView}>
        <AllNavbar leftImageSource={require('../../assests/BackArrow.png')} title={"Profile"} />
        <View style={styles.profileView}>
          <Image style={styles.profile} source={require('../../assests/ProfileImage.png')} />
          <Text style={styles.name}>Alvart Einstien</Text>
          <Text style={styles.email}>@alvarteinstien</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <View style={styles.allTasks}> 
          <Image style={styles.task} source={require('../../assests/Time.png')} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  allView: {
    width: '100%',
    height: 600,
    display: 'flex',
    flexDirection: 'column',
  },
  profileView: {
    width: "100%",
    height: 700,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    
  },
  profile: {
    width: 100,
    marginTop: 40,
    height: 100,
    borderRadius: 100,
  },
  name: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 10
  },
  editBtn: {
    width: 50,
    height: 30,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#F7F8F8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  allTasks: {
width: 226,
height: 70,
backgroundColor: 'green'
  }, 
  task: {
    width: 20,
    height: 20,
  }
});

export default Profile;







// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
// import AllNavbar from '../../LoginSignup/Navbar/AllNavbar';

// const Profile = () => {
//   const [showNestedList, setShowNestedList] = useState(false);

//   const data = [
//     { id: '1', title: 'Nested Item 1' },
//     { id: '2', title: 'Nested Item 2' },
//     { id: '3', title: 'Nested Item 3' },
//     // Add more nested items as needed
//   ];

//   const renderNestedItem = ({ item }) => (
//     <Text style={styles.nestedItem}>{item.title}</Text>
//   );

//   const toggleNestedList = () => {
//     setShowNestedList(!showNestedList);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.allView}>
//         <AllNavbar leftImageSource={require('../../assests/BackArrow.png')} title={"Profile"} />
//         <View style={styles.profileView}>
//           <Image style={styles.profile} source={require('../../assests/ProfileImage.png')} />
//           <Text style={styles.name}>Alvart Einstien</Text>
//           <Text style={styles.email}>@alvarteinstien</Text>
//           <TouchableOpacity style={styles.editBtn}>
//             <Text>Edit</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={toggleNestedList}>
//             <Image source={require('../../assests/BackArrow.png')} style={styles.arrowIcon} />
//           </TouchableOpacity>

//           {showNestedList && (
//             <FlatList
//               data={data}
//               renderItem={renderNestedItem}
//               keyExtractor={item => item.id}
//             />
//           )}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   // Your existing styles
//   container: {
//     width: '100%',
//     height: '100%',
//   },
//   allView: {
//     width: '100%',
//     height: 600,
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   profileView: {
//     width: "100%",
//     height: 700,
//     display: 'flex',
//     // justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: 'red',
    
//   },
//   profile: {
//     width: 100,
//     marginTop: 40,
//     height: 100,
//     borderRadius: 100,
//   },
//   name: {
//       fontSize: 22,
//       fontWeight: 'bold',
//       marginTop: 10
//   },
//   editBtn: {
//     width: 50,
//     height: 30,
//     marginTop: 10,
//     marginLeft: 10,
//     backgroundColor: '#F7F8F8',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   arrowIcon: {
//     width: 20,
//     height: 20,
//     marginTop: 10,
//   },
//   nestedItem: {
//     marginLeft: 20,
//     marginTop: 10,
//     fontSize: 16,
//   },
// });

// export default Profile;
