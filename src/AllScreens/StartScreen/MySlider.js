
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MySlider = () => {
  const navigation = useNavigation()
  const images = [
    { image: require('../../assests/groupOne.png'), text: 'Task Management\nLet`s create a space for your workflows.' },
    { image: require('../../assests/groupTwo.png'), text: 'Task Management\nLet`s create a space for your workflows.' },
    { image: require('../../assests/groupThree.png'), text: 'Task Management\nLet`s create a space for your workflows.' },
    // Add more images and texts as needed
  ];

  const renderImage = ({ item, index }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      {/* {index === images.length - 1 && (
        <TouchableOpacity style={styles.skipButton} onPress={() => handleSkip()}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )} */}
      <Text onPress={goSignin} style={styles.skip}>Skip</Text>
    </View>
  );

  const goSignin = () => {
    navigation.navigate('Signin')
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderImage}
        sliderWidth={300}
        itemWidth={300}
        loop={true}
        autoplay={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: -100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 370,
    marginLeft: -20
  },
  skip: {
    marginLeft: 40,
    marginTop: 30
  }
});

export default MySlider;
