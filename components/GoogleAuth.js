import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth, provider } from './firebase';
import { signInWithPopup } from "firebase/auth";

export default function GoogleAuth() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const signInWithGoogle = () => {

        signInWithPopup(auth, provider).then((result) => {

            setUsername(result.user.displayName);
            setEmail(result.user.email)

            console.log(result);

        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <View style={style.container}>
            <Button
                onPress={signInWithGoogle}
                title="Sign In With Google"
                color="#4169E1"
            />
            <Text>{username}</Text>
            <Text>{email}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
