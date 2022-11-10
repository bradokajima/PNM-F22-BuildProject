import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions, Pressable } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const date = new Date();

let curr_day = date.getDate();
if (curr_day >= 1 && curr_day <= 9) {
    curr_day = "0" + curr_day
}
let month = date.getMonth() + 1;
if (month >= 1 && month <= 9) {
    month = "0" + month
}
let year = date.getFullYear();
const curr_date = "" + month + "-" + curr_day + "-" + year;

export default function DetailsScreen({ navigation }) {

    //const [hr1, setHr1] = useState([]);

    const mf_labels = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm",
        "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

    const sample_data = [0, 10, 20, 30, 40, 50, 60, 60, 50, 70, 80, 90, 70, 80, 60, 40, 20, 10];

    const [barData, setBarData] = useState({
        labels: mf_labels,
        datasets: [
            {
                data: sample_data,
            },
        ],
    });

    function update_chart(selected_day) {

        if (selected_day >= 1 && selected_day <= 5) {
            setBarData({
                labels: mf_labels,
                datasets: [
                    {
                        data: sample_data,
                    },
                ],
            });
        }
        else if (selected_day == 6) {
            setBarData({
                labels: mf_labels.slice(3, 13),
                datasets: [
                    {
                        data: sample_data.slice(3, 13),
                    },
                ],
            });
        }
        else if (selected_day == 7) {
            setBarData({
                labels: mf_labels.slice(3, 17),
                datasets: [
                    {
                        data: sample_data.slice(3, 17),
                    },
                ],
            });
        }
    }
    return (

        <View style={styles.container}>

            <Text style={styles.heading}>{month} - {year}</Text>
            <Text style={styles.calendar_box}>M  T  W  TH  F  S  S</Text>

            <View style={styles.buttons_box}>
                <View style={styles.button}><Button title="7" onPress={() => update_chart(1)} /></View>
                <View style={styles.button}><Button title="8" onPress={() => update_chart(2)} /></View>
                <View style={{ marginLeft: 7, marginRight: 10 }}><Button title="9" onPress={() => update_chart(3)} /></View>
                <View style={styles.button}><Button title="3" onPress={() => update_chart(4)} /></View>
                <View style={styles.button}><Button title="4" onPress={() => update_chart(5)} /></View>
                <View style={styles.button}><Button title="5" onPress={() => update_chart(6)} /></View>
                <View style={styles.button}><Button title="6" onPress={() => update_chart(7)} /></View></View>

            <Text style={styles.heading}>Average Gym Users Per Hour</Text>

            <BarChart
                data={barData}
                width={Dimensions.get('window').width - 20}
                height={200}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 0,
                    barRadius: 1.5,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendar_box: {
        borderRadius: 15,
        paddingVertical: 30,
        paddingHorizontal: 40,
        backgroundColor: "#eaeaea",
        color: "#20232a",
        textAlign: "center",
        width: "85%",
        fontSize: 30,
    },
    buttons_box: {
        borderRadius: 15,
        paddingVertical: 30,
        paddingHorizontal: 40,
        backgroundColor: "#eaeaea",
        color: "#20232a",
        justifyContent: "center",
        fontSize: 100,
        width: "85%",
        flexDirection: "row"
    },
    heading: {
        marginTop: 30,
        fontSize: 24,
        textAlign: "left"
    },
    button: {
        marginLeft: 7,
        marginRight: 7
    }

});
