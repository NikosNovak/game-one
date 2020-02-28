import React from 'react';
import { View, StyleSheet } from 'react-native';
import Board from '../components/Board';
import BatButton from '../components/BatButton';


const generateNumbers = () => {
    let numbers = [];

    for (var i = 1; i <= 36; i++)
        numbers.push(i);

    numbers = numbers.sort(() => Math.random() - 0.5);
    return numbers;
}

const StartGameScreen = ({ navigation }) => {
    return (
        <React.Fragment>        
            <View style={styles.container}>
                <Board numbers={generateNumbers()} navigation={navigation} />                
                <View style={styles.viewButton}>
                    <BatButton
                        onPress={() => navigation.navigate('Welcome')}
                        title="Додому"
                        customStyle={{ backgroundColor: '#0095ff' }}
                    />
                </View>
            </View>
            
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',        
    },
    viewButton: {
        width: '90%',
        paddingVertical: 20,
        color: '#fff'
    }
});

export default StartGameScreen;