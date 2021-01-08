import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';


export default function Device(props) {

    const [isOn, setIsOn] = useState(false);
    

    const onButtonClicked = () => {
        if(!isOn) {
            props.updateCounter('increment');
            setIsOn(!isOn)
        }
        
    };

    const offButtonClicked = () => {
        if (isOn) {
            props.updateCounter('decrement');
            setIsOn(!isOn);

        }
        
    };

    return (
        <View style={styles.containerHelperWithSpaceBetween}>
            <View style={styles.container}>
                <View style={isOn ? styles.greenIndicator : styles.redIndicator}/>
                <Text style={styles.deviceText}>{props.deviceName}</Text>
                
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="On" onPress={() => onButtonClicked()} />
                    <Button title="Off" onPress={() => offButtonClicked()} />
                </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    containerHelperWithSpaceBetween: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'beige',
        alignItems: 'center',
        height: 100,
        marginTop: 20,
    },
    greenIndicator: {
        width: 20,
        height: 20,
        backgroundColor: '#42f548',
        marginLeft: 10,
    },
    redIndicator: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        marginLeft: 10,
    },
    deviceText: {
        fontSize: 18,
        marginLeft: 15,
    },
    buttonContainer: {
        backgroundColor: '#fff',
        marginRight: 10,
  }
  
});