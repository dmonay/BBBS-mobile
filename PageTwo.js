import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Button from 'apsl-react-native-button';
// import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundImageView}>
                    <Image
                        source={require('./assets/background.jpg')}
                        style={styles.backgroundImage}
                        blurRadius={4}
                    />
                </View>
                <View style={[styles.tintView, { backgroundColor: this.props.color }]} />
                <Button style={styles.buttonFacebook} textStyle={styles.buttonText}>
                    Sign in with Facebook
                </Button>
                <Button
                    style={[styles.buttonEmail, { backgroundColor: this.props.color }]}
                    textStyle={styles.buttonText}
                >
                    Sign in with Email
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    backgroundImage: {
        resizeMode: 'cover',
        opacity: 0.5
    },
    backgroundImageView: {
        height: 700,
        position: 'absolute'
    },
    tintView: {
        opacity: 0.3,
        position: 'absolute',
        height: 750,
        width: 430
    },
    buttonFacebook: {
        backgroundColor: '#4080ff',
        borderColor: 'transparent',
        width: 350,
        height: 60,
        marginTop: 40,
        marginLeft: 35,
        borderRadius: 45
    },
    buttonEmail: {
        backgroundColor: '#95ffce',
        borderColor: 'transparent',
        width: 350,
        height: 60,
        marginLeft: 35,
        borderRadius: 45
    },
    buttonText: {
        fontSize: 25,
        color: '#fff'
    }
});
