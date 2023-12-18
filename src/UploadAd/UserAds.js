// import React, { useRef, useState } from 'react';
// import axios from 'axios';
// import {View, Text, TextInput, Button, Image} from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler';

// const UserAds = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
// //   const [imageUrl, setImageUrl] = useState('');
//   const [condition, setCondition] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [image, setImage] = useState(null);  
// //   const [location, setLocation] = useState(null);  
// //   const fileInputRef = useRef(null);
  
//   const postAd = async (e) => {
//     e.preventDefault();
//     // const formData = new FormData();
//     // // formData.append('file', image);
//     // formData.append('upload_preset', 'Upload_Image');
//     // formData.append('cloud_title', 'drj6zra5d');
  
//     // try {
//     //   const response = await axios.post('https://api.cloudinary.com/v1_1/drj6zra5d/image/upload', {
//     //     method: 'POST',
//     //     body: formData,
//     //   });
  
//     //   if (response.ok) {
//     //     const data = await response.json();
//     //     setImageUrl(data.secure_url);
        
//     //     try {
//     //       const adData = {
//     //         title,
//     //         description,
//     //         imageUrl: data.secure_url, // Use the URL obtained from Cloudinary upload
//     //         condition,
//     //         price,
//     //         phone,
//     //         location
//     //       };
  
//           const postResponse = await axios.post('http://192.168.0.102:3000/ecommerce/api', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(adData),
//           });
  
//           if (postResponse.ok) {
//             alert('Ad posted successfully!');
//           } else {
//             alert('Failed to post ad');
//         } catch (error) {
//           console.error('Error posting ad:', error);
//         }
//       } else {
//         console.error('Failed to upload image to Cloudinary');
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };
//           }
  

//   return (
//    <>
//      <ScrollView style={{ flex: 1 }}>
   
//     <Text style={{ marginLeft: 120, marginTop: 20, fontSize: 20 }}>POST YOUR AD</Text>
//     <View style={{ flex: 1, alignItems: 'center' }}>
//       <View style={{ width: '80%', borderWidth: 1, borderColor: 'black', marginTop: 20 }}>
//         <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>INCLUDE SOME DETAILS</Text>
//         <Text style={{ marginLeft: 20 }}>Ad title</Text>
       
//           <TextInput
//           style={{ borderWidth: 1, borderColor: 'black', height: 40, marginTop: 5, marginLeft: 20, width: '90%' }}
//           value={title}
//           onChangeText={setTitle}
//         />
//         <Text style={{ marginLeft: 20 }}>Description</Text>
//         <TextInput
//           multiline
//           style={{ borderWidth: 1, borderColor: 'black', height: 80, marginTop: 5, marginLeft: 20, width: '90%' }}
//           value={description}
//           onChangeText={setDescription}
//         />
//         <Text style={{ marginLeft: 20 }}>Condition</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: 'black', height: 40, marginTop: 5, marginLeft: 20, width: '90%' }}
//           value={condition}
//           onChangeText={setCondition}
//         />
//     <Button title='Post Data' onPress={postAd} />
//       </View>
//       {/* ... (continue converting other elements similarly) */}
//     </View>
//   </ScrollView>
      
//       </>

//   );
// };

// export default UserAds;
