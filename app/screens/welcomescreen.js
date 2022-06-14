import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} 
        source={require("../assets/favicon.png")}>
            <Image style={styles.logo} source={require("../assets/art.png")} />
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, //image takes entire screen
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "dodgerblue",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "pink",
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 70,
    },
})

export default WelcomeScreen;