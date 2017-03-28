import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Button from 'apsl-react-native-button';
import { Actions } from 'react-native-router-flux';

const nextPageParent = () => Actions.pageTwo({ color: '#ffa395' });
const nextPageBBBS = () => Actions.pageTwo({ color: '#95ffce' });

export default class PageOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundImageView}>
                    <Image
                        source={require('./assets/background.jpg')}
                        style={styles.backgroundImage}
                        blurRadius={5}
                    />
                </View>
                <Text style={styles.titleBig1}>BIG</Text>
                <Text style={styles.titleBrothers}>BROTHERS</Text>
                <Text style={styles.titleBig2}>BIG</Text>
                <Text style={styles.titleSisters}>SISTERS</Text>
                <Image source={require('./assets/quotes_open.png')} style={styles.quotesOpen} />
                <Text style={styles.inspiration}>
                    Inherent in every child is the ability to succeed and thrive in life
                </Text>
                <Image source={require('./assets/quotes_close.png')} style={styles.quotesClose} />
                <Button
                    style={styles.buttonParent}
                    textStyle={styles.buttonText}
                    onPress={nextPageParent}
                >
                    I'm a Parent
                </Button>
                <Button
                    style={styles.buttonBBBS}
                    textStyle={styles.buttonText}
                    onPress={nextPageBBBS}
                >
                    I'm a BB/BS
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
        opacity: 0.9
    },
    backgroundImageView: {
        height: 700,
        position: 'absolute'
    },
    titleBig1: {
        fontSize: 122,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '100',
        color: '#fff'
    },
    titleBig2: {
        fontSize: 122,
        textAlign: 'center',
        marginTop: -8.5,
        fontWeight: '100',
        color: '#fff'
    },
    titleBrothers: {
        fontSize: 37,
        textAlign: 'center',
        letterSpacing: -3,
        marginTop: -20,
        color: '#fff'
    },
    titleSisters: {
        fontSize: 37,
        textAlign: 'center',
        letterSpacing: 2,
        marginTop: -20,
        color: '#fff'
    },
    inspiration: {
        marginTop: 20,
        fontSize: 25,
        width: 270,
        textAlign: 'center',
        color: '#fff'
    },
    buttonParent: {
        backgroundColor: '#ffa395',
        borderColor: 'transparent',
        width: 350,
        height: 60,
        marginTop: 40,
        marginLeft: 35,
        borderRadius: 45
    },
    buttonBBBS: {
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
    },
    quotesOpen: {
        width: 20,
        height: 15,
        position: 'relative',
        left: -160,
        top: 40
    },
    quotesClose: {
        width: 20,
        height: 15,
        position: 'relative',
        right: -120,
        top: -20
    }
});
