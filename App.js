import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

//const a = 0; //이렇게 하면 안됨

export default function App() {
  const [number, setNumber] = useState(0);
  
  //useState(); //변하는 부분
  
  const handleMinus = () => {
    setNumber(number-1);
  };
  const handlePlus = () => {
    setNumber(number+1);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.box}>
      <Text style={styles.title}> This is My Counter</Text>
      <Text style={styles.subt}> MIN : 0  /  MAX : 10</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <View style={styles.numberBox}>
        <TouchableOpacity style = {styles.minusButton} onPress={handleMinus} disabled={number<=0}>
        <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.plusButton}onPress={handlePlus}disabled={number>=10}>
        <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcedc8',
  
  },

  box: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title : {
    fontSize: 35,
    fontWeight:'900',
    color:'#1b5e20'
  },
  
  subt :{
    marginTop:10,
    fontSize: 18,
    color:'#2e7d32'
  },

  number : {
    color: 'green',
    fontSize:100,
    fontWeight: '900',
  },

  buttonText:{
    color:'white',
    fontSize: 70,
    fontWeight : '900',
  
  },

  minusButton:{
    backgroundColor:'#ff7043',
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 40,
    marginTop: 20,
    marginRight: 40,
  },
  plusButton:{
    backgroundColor:'#29b6f6',
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 40,
    
  },
  numberBox:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    gap:20,
  }
});