import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { getDatabase, ref, child, get } from "firebase/database";

export default function LiveCounter() {

    const [peopleCount, setPeopleCount] = useState(0); //People Count
    const maxCap = 200; //Max Capacity

    const dbRef = ref(getDatabase());
    get(child(dbRef, `value`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            setPeopleCount(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    return (
        <View style={style.container}>
            <Text style={style.title}>Live Data</Text>
            <CircularProgress
                value={peopleCount}
                maxValue={maxCap}

                showProgressValue={true}
                progressValueColor={'blue'}

                radius={80}
                inActiveStrokeWidth={25}
                activeStrokeWidth={25}
                duration={1000}
                strokeColorConfig={[
                    { color: 'skyblue', value: 0 },
                    { color: 'blue', value: 200 },
                ]}
            />
            <Text style={style.subtext}>There are currently</Text>
            <Text style={style.title}>{peopleCount}</Text>
            <Text style={style.subtext}>people in the gym</Text>
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
    title: {
        fontFamily: 'SFPro',
        fontSize: 50,

    },
    subtext: {
        fontFamily: 'DMSans',
        fontSize: 20,
    },
});