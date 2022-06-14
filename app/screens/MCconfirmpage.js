import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

function MCconfirmpage(props) {
    return (
        <Background style={styles.background}>
            <Text>Confirm to go to Medical Centre?</Text>
            <View style={styles.yesButton}></View>
            <View style={styles.noButton}></View>
        </Background>
    );
}

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
    },
    yesButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#558f6c",
    },
    noButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#558f6c",
    },
})

export default MCconfirmpage;