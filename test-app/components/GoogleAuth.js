import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
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
            <Text style={style.title}>Sign In</Text>
            <Pressable style={style.button} onPress={signInWithGoogle}>
                <Text style={style.text}>Sign In With Google</Text>
            </Pressable>
            <Text>{username}</Text>
            <Text>{email}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: '#1C88F4',
    },
    text: {
        fontFamily: 'DMSans',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    title: {
        fontFamily: 'SFPro',
        fontSize: 40,
        paddingBottom: 50,
    },
});
