import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
    const navigation = useNavigation();
    const goSlider = () => {
        navigation.navigate('Slider');

    }

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image
                    source={require('../../assests/Home.png')}
                    style={styles.homeImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.box2}>
                <Image
                    source={require('../../assests/Logo.png')}
                    style={styles.logoImage}
                />
                <View style={styles.box2Text}>
                    <View>
                        <Text style={styles.builderText}>Building Better </Text>
                        <Text style={styles.workplacesText}> Workplaces </Text>
                    </View>
                    <View>
                        <Text style={styles.createText}>
                            Create a unique emotinal store that
                        </Text>
                        <Text style={styles.describeText}>
                            describe better than words
                        </Text>
                    </View>

                </View>
                <TouchableOpacity onPress={goSlider} style={styles.statrtedBtn}  >
                    <Text style={styles.statrtedText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};







const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    box1: {
        width: '100%',
        height: "50%",
    },
    homeImage: {
        width: '100%',
        height: "100%",
        resizeMode: "contain"

    },
    box2: {
        width: '100%',
        height: "50%",
        // backgroundColor: 'blue',
    },
    logoImage: {
        width: 191,
        height: 48,
        marginLeft: 80,
        marginTop: 30,


    },
    box2Text: {
        width: 295,
        height: 148,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        marginLeft: 28,
    },
    builderText: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20
    },
    workplacesText: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 15
    },
    createText: {
        fontSize: 12,
        marginTop: 20
    },
    describeText: {
        fontSize: 12,
        marginLeft: 25,
        marginTop: 5

    },
    statrtedBtn: {
        marginTop: 20,
        marginLeft: 30,
        width: 295,
        height: 60,
        backgroundColor: '#8B78FF',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    statrtedText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});

export default GetStarted;
