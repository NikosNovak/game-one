import React from 'react';
import { View, StyleSheet, Image, Button, Text } from 'react-native';
import Spacer from '../components/Spacer';

const AboutScreen = ({ navigation }) => {
        return (
            <React.Fragment>
            <View style={styles.container}>
                <View><Text>Презентація React Native 21.02.2020</Text></View>
                <View style={styles.viewButton}>
                    <Button
                        onPress={() => navigation.navigate('Welcome')}
                        title="Додому"
                    />
                </View>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9e79f',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
    },
    viewButton: {
        width: '90%',
        paddingVertical: 50,
        color: '#fff'
    }
});

export default AboutScreen;