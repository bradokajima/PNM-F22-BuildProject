import React, {Component, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);

export const fdb = getFirestore(app);

export default function DetailsScreen({ navigation }) {

  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const daysCollectionRef = collection(fdb, "days");

  //const [hr1, setHr1] = useState([]);

  useEffect(() => {
    const getDays = async () => {
      const data = await getDocs(daysCollectionRef);
      const items = [];
      setDays(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      data.forEach((doc) => {
        items.push(doc.data());
      });
      setHours(items);
      console.log(daysCollectionRef)
      const yester_data = doc(fdb, "days", "11-07-2022");
      const yesterday_hr1 = await getDoc(yester_data.hr1);
      setHr1(yesterday_hr1);
    };

    getDays();


  }, []);

  const mf_labels = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm",
  "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

  const sample_data_11_3 = [30, 94, 130, 203, 295, 330, 324, 411, 453, 521, 534, 576, 501, 441, 348, 212, 112, 53];
  const sample_data_11_4 = [30, 98, 120, 139, 194, 230, 260, 310, 369, 451, 521, 542, 492, 415, 378, 294, 159, 59];
  const sample_data_11_5 = [42,112,164,201,221,190,153,79,30];
  const sample_data_11_6 = [237, 201, 347, 110, 204, 523, 409, 527, 501, 476, 201, 178, 127, 45];
  const sample_data_11_7 = [46, 120, 110, 201, 312, 401, 510, 201, 236, 304, 453, 520, 402, 235, 123, 49];
  const sample_data_11_8 = [31, 120, 110, 201, 510, 423, 478, 502, 535, 201, 302, 298, 304, 286, 240, 138, 114, 49];
  const sample_data_11_9 = [35, 43, 146, 245, 156, 276, 223, 366, 329, 438, 510, 479, 412, 489, 333, 289, 133, 59];



  const [barData, setBarData] = useState({
    labels: mf_labels,
    datasets: [
      {
        data: sample_data_11_3,
      },
    ],
  });

  function update_chart (selected_day) {

    if (selected_day == 3) {
      setBarData({
        labels: mf_labels,
        datasets: [
          {
            data: sample_data_11_3,
          },
        ],
      });
    }
    if (selected_day == 4) {
      setBarData({
        labels: mf_labels,
        datasets: [
          {
            data: sample_data_11_4,
          },
        ],
      });
    }
    if (selected_day == 7) {
      setBarData({
        labels: mf_labels,
        datasets: [
          {
            data: sample_data_11_7,
          },
        ],
      });
    }
    if (selected_day == 8) {
      setBarData({
        labels: mf_labels,
        datasets: [
          {
            data: sample_data_11_8,
          },
        ],
      });
    }
    if (selected_day == 9) {
      setBarData({
        labels: mf_labels,
        datasets: [
          {
            data: sample_data_11_9,
          },
        ],
      });
    }
    else if (selected_day == 5) {
      setBarData({
        labels: mf_labels.slice(3,13),
        datasets: [
          {
            data: sample_data_11_5,
          },
        ],
      });
    }
    else if (selected_day == 6) {
      setBarData({
        labels: mf_labels.slice(3,17),
        datasets: [
          {
            data: sample_data_11_6,
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
                <View style={styles.button}><Button title="7" onPress={() => update_chart(7)} /></View>
                <View style={styles.button}><Button title="8" onPress={() => update_chart(8)} /></View>
                <View style={{ marginLeft: 7, marginRight: 10 }}><Button title="9" onPress={() => update_chart(9)} /></View>
                <View style={styles.button}><Button title="3" onPress={() => update_chart(3)} /></View>
                <View style={styles.button}><Button title="4" onPress={() => update_chart(4)} /></View>
                <View style={styles.button}><Button title="5" onPress={() => update_chart(5)} /></View>
                <View style={styles.button}><Button title="6" onPress={() => update_chart(6)} /></View></View>

      <Text style={styles.heading}>Average Gym Users Per Hour</Text>

      <BarChart
        data={barData}
        width={Dimensions.get('window').width-20}
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
