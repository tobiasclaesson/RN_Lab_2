import React, {useState} from 'react';
import { StyleSheet,Text, View } from 'react-native';
import Device from './Device';

export default function Devices() {

    const [devicesOnCounter, setDevicesOnCounter] = useState(0);

    const updateCounter = (action) => {
        if(action === "decrement") {
            setDevicesOnCounter(devicesOnCounter - 1)
        } else if (action === "increment"){
            setDevicesOnCounter(devicesOnCounter + 1)
        }
            
    };

  return (
    <View style={styles.container}>
      <Text style={ styles.text } >Devices</Text>
      <View style={ styles.horizontalContainer }>
        <Device deviceName={'Living Room Lamp'} updateCounter={updateCounter}/>
        <Device deviceName={'Heater'} updateCounter={updateCounter}/>
        <Device deviceName={'TV'} updateCounter={updateCounter}/>
        <Text
        style={{fontWeight: 'bold',
        marginTop: 10,
        fontSize: 16
        }}>
            {'Total Devices On: '}
            <Text
            style={{fontWeight: 'normal'}}>
                {devicesOnCounter}
            </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#fff',
    width: '90%',
    
  },
  horizontalContainer: {
    
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  }
});