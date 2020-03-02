import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Cell = props => {
    const pressCellHandler = () =>{
        props.onReturnNum(props.value);
    };

    return (
        <TouchableOpacity onPress={pressCellHandler} style={styles.cell}>
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cell: {
        width: "16%",
        height: "16%",
        borderWidth: 1,
        backgroundColor: '#CAE1F1',
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1, 
        borderRadius: 15
    },
    text: {
        fontSize: 19
    }
});

export default Cell;