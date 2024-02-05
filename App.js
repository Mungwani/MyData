import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.rainbow, styles.red]} />
      <View style={[styles.rainbow, styles.orange]} />
      <View style={[styles.rainbow, styles.yellow]} />
      <View style={[styles.rainbow, styles.green]} />
      <View style={[styles.rainbow, styles.blue]} />
      <View style={[styles.rainbow, styles.indigo]} />
      <View style={[styles.rainbow, styles.violet]} />
      <View style={styles.content}>
        <Text style={styles.text1}>컴퓨터공학과 21학번 한철완</Text>
        <Text style={styles.text2}>MyData 앱개발 교육</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },

  red: {
    backgroundColor: 'red',
    height: 120, 
  },
  orange: {
    backgroundColor: 'orange',
    height: 120, 
  },
  yellow: {
    backgroundColor: 'yellow',
    height: 120, 
  },
  green: {
    backgroundColor: 'green',
    height: 120, 
  },
  blue: {
    backgroundColor: 'blue',
    height: 120, 
  },
  indigo: {
    backgroundColor: 'indigo',
    height: 120, 
  },
  violet: {
    backgroundColor: 'purple',
    height: 120, 
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    position : 'absolute',
    top: 0,
    left:0,
    right:0,
    bottom:0,
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 10,
  },
  text2: {
    color: '#000000',
    fontSize: 20,
  },
});