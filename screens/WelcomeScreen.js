import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import BatButton from '../components/BatButton';


const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo_bat.jpg')}/>
            <View><Text style={styles.text}>Підпільна Ігрова студія AS APAC Game</Text></View>
            <View><Text style={styles.text}>נאָך יאָ</Text></View>
            <View style={styles.buttons}>
                <BatButton
                    onPress={() => navigation.navigate('Intro')}
                    title="Гра"
                    style={styles.buttonView}
                />
                <BatButton
                    onPress={() => navigation.navigate('Records')}
                    title="Рекорди"
                    style={styles.buttonView}
                />
                <BatButton
                    onPress={() => navigation.navigate('About')}
                    title="Про додаток"
                    style={styles.buttonView}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    buttons: {
        flex: 3,
        width: '90%',
        alignContent: 'center',
        justifyContent: 'space-around'

    },
    text: {
        fontSize: 18,        
        fontWeight: 'bold'
    },
    buttonView: {
        flex: 1,
        width: 300,
        height: 50
    }
});

export default WelcomeScreen;