import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skyBlue} />
      <View style={styles.blue} />
      <View style={styles.flexRow}>
        <View style={styles.white} />
        <View style={styles.black} />
      </View>
      <View style={styles.gray} />
      <View style={styles.yellow} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    flex: 1,
  },

  skyBlue: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  blue: {
    backgroundColor: 'blue',
    flex: 1,
  },
  white: {
    backgroundColor: 'white',
    flex: 1,
  },
  black: {
    backgroundColor: 'black',
    flex: 1,
  },
  gray: {
    flex: 1, 
    backgroundColor: 'gray',
  },
  yellow: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});