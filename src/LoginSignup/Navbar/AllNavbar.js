import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AllNavbar = ({ title, leftImageSource, rightImageSource }) => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.backView}>
        <Image source={leftImageSource} style={styles.backArrow} />
      </View>
      <Text style={styles.signinText}>{title}</Text>
      <View style={styles.backView}>
        <Image source={rightImageSource} style={styles.backArrow} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    width: "100%",
    height: 42,
    backgroundColor: "#FFFFFF",
    // marginLeft: 10,
    // marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backView: {
    width: 42,
    height: 42,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    marginLeft: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    width: 30,
    height: 30,
    color: 'black',
  },
  signinText: {
    marginRight: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default AllNavbar;
