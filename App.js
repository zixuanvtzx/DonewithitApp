import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import welcomescreen from './app/screens/welcomescreen';
//safeareaview will make stuff visible only in visible areas, like got padding on the top 
// flex: 1 = full, 0.5 = half


export default function App() {
  return <welcomescreen />;
}

