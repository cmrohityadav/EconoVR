import { View, Text,Image } from 'react-native'
import React from 'react'

const Settings = () => {
  return (<View style={{ backgroundColor: '#081122', height: '100%' }}>

  {/* semi white circle */}
  <View style={{
    backgroundColor: 'white', height: 200, width: 390,
    borderBottomEndRadius: 1000, borderBottomStartRadius: 1000,
    borderColor: 'black', borderWidth: 5, alignItems: 'center', marginTop: 20



  }}>
    {/* setting text */}
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 33, color: '#081122' }}>Setting</Text>
    </View>

  </View>



  {/*bluetooth section  */}
  <View style={{marginTop:150}}>

      <View>
        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:25,
        borderBottomColor:"white",borderBottomWidth: 1,
        paddingBottom:20
        
        }}>
          <Image
          source={require('../img/bluetooth.png')}
          />
          <Text style={{color:'white',marginLeft:25}}>Connect to Bluetooth</Text>

        </View>

      </View>
  </View>
  



</View>
  )
}

export default Settings