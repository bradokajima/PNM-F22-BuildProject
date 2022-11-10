import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { db } from './components/firebase';
import GoogleAuth from './components/GoogleAuth';
import LiveCounter from './components/LiveCounter';
import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      'SFPro': require('srac-app/assets/fonts/SFProDisplay-Semibold.ttf'),
      'DMSans': require('srac-app/assets/fonts/DMSans-Medium.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <MainContainer />
      );
    } else {
      return null;
    }
  }
}