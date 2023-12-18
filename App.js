import React, { useState } from 'react'
// import Product from './components/Product'
// import {Text} from 'react-native'
import Routing  from './src/Navigations/Routing'
import { View,Text, Button, TouchableOpacity, Image  } from 'react-native'
// import Signin from './src/LoginSignup/Signin'
// <Routing />
// <Signin />
// import FilePicker from 'react-native-document-picker'


const App = () => {
  // const [fileData, setFileData] = useState([])

  // const goImage = async() => {
  //   try{
  //   const response =  await FilePicker.pick({
  //     presentationStyle: 'fullScreen',
  //     // allowMultiSelection: true
  //    })
  //    console.log(response)
  //    setFileData(response)
    
  //   } catch (error) {
  //     console.log(error)
  //   }
  //     }
    

  return (
    <Routing />
    )
}

export default App


    // <Product />
    // <Text>Helooo</Text>
  
    // <Routing />

{/* <View> */}
  {/* <Button title="Go Image" onPress={goImage} /> */}
{/* {fileData.length > 0 ? fileData.map((x,i) => {
  return (
    <View key={i}>
      {/* <Text>name: {x.name}</Text>
      <Text>name: {x.size}</Text>
      <Text>name: {x.uri}</Text> */}
      {/* <Image source={{uri: x.uri}} style={{height: 300, width: 300}} />
    </View> 
  )
}) : null

} */} 
// </View>