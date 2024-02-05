import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.flexRow}>
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box5} />
        <View style={styles.box6} />
      </View>
      <View style={styles.box7} />
      <View style={styles.box8} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },

  flexRow: {
    flex : 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    gap: 10,
  },
 
  box1: {
    backgroundColor: 'blue',
    borderWidth:10,
    borderColor: 'red',
    //flex:1,
    height : 110,
  },
  box2: {
    backgroundColor: 'green',
    //flex:1,
    height : 150,
  },
  box3: {
    backgroundColor: '#ff7043',
    flex: 1,
  },
  box4: {
    backgroundColor: '#69f0ae',
    flex: 1,
  },
  box5: {
    backgroundColor: '#ff9100',
    flex: 1,
  },
  box6: {
    backgroundColor: '#9e9d24',
    flex: 1,
  },
  box7: {
    backgroundColor: '#6a1b9a',
    height: 190,
  },
  box8: {
    backgroundColor: '#827717',
    height: 95,
  },
});