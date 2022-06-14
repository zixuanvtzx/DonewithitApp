import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native-web';

function welcomescreen(props) {
    return (
        <ImageBackground 
        style={styles.background} 
        source={require("../assets/icon.png")}>

            <View style={styles.loginButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "dodgerblue",
    }
})

export default welcomescreen;