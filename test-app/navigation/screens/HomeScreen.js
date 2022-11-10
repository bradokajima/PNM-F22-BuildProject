import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LiveCounter from '../../components/LiveCounter';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <LiveCounter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff"
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});