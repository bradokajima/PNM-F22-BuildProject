import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { db } from './components/firebase';
import GoogleAuth from './components/GoogleAuth';
import LiveCounter from './components/LiveCounter';
import MainContainer from './navigation/MainContainer';
import { useFonts } from 'expo-font';


function App() {
  const [loaded] = useFonts({
    SFPro: require('srac-app/assets/fonts/SFProDisplay-Semibold.ttf'),
    DMSans: require('srac-app/assets/fonts/DMSans-Medium.ttf')
  })

  if (!loaded) {
    return null;
  }
  return (
    <MainContainer />
  );
}

export default App;