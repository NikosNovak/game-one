import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = () => {
    return (
        <View style={styles.container}>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 20,
    },
});

export default Spacer;