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
        color: '#fff',
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1
    },
    text: {
        fontSize: 18
    }
});

export default Cell;