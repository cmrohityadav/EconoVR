import { View, Text ,Button,Linking,
    Platform} from 'react-native'
import React from 'react'
import OpenSettings from 'react-native-open-settings';
const BLE = () => {
    const openBluetoothSettings = () => {
        OpenSettings.openBluetoothSettings();
      };
  return (
    <View style={{margin:100}}>
      <Button title="Open Bluetooth Settings" 
      onPress={() => {
          Platform.OS === 'ios'
            ? Linking.openURL('App-Prefs:Bluetooth')
            : Linking.sendIntent('android.settings.BLUETOOTH_SETTINGS');
        }}
       />


    </View>
  )
}

export default BLE