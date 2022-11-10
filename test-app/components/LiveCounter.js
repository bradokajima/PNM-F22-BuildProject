import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { getDatabase, ref, child, get } from "firebase/database";

export default function LiveCounter() {

    const [peopleCount, setPeopleCount] = useState(0); //People Count
    const maxCap = 511; //Max Capacity

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
            <Text style={style.title}>Today's Data</Text>
            <CircularProgress
                value={peopleCount}
                maxValue={maxCap}

                showProgressValue={true}

                radius={120}
                inActiveStrokeWidth={35}
                inActiveStrokeColor='#D2D2D2'
                activeStrokeWidth={35}
                duration={1000}
                activeStrokeColor={'#1C88F4'}
                activeStrokeSecondaryColor={'##0055A2'}

            />
            <View style={style.subcontainer}>
                <Text style={style.subtext}>There are currently</Text>
                <Text style={style.numtext}>{peopleCount}</Text>
                <Text style={style.subtext}>people in the gym</Text>
            </View>
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
    subcontainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    title: {
        fontFamily: 'SFPro',
        fontSize: 50,
        paddingBottom: 50,
    },
    subtext: {
        fontFamily: 'SFPro',
        fontSize: 30,
    },
    numtext: {
        fontFamily: 'SFPro',
        fontSize: 40,
    },
});