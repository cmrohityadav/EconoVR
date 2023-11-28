import { View, Text,StyleSheet,TouchableOpacity ,Modal} from 'react-native'
import React ,{useState}from 'react'

import {SimpleModal} from './SimpleModal'


const Logout = () => {
  const [isModalVisible,setisModalVisible]=useState(false);
  const changeModalVisible=(bool)=>{
    setisModalVisible(bool)
    
  }
  return (
    <View style={{ backgroundColor: '#081122', height: '100%' }}>
      <View style={styles.container}>
      <TouchableOpacity
      onPress={()=>changeModalVisible(true)}
      style={styles.touchableOpacity}
      >
      <Text style={styles.text}>Logout</Text>

      </TouchableOpacity>
    <Modal
    transparent={true}
    animationType='fade'
    visible={isModalVisible}
    nRequestClose={()=>changeModalVisible(false)}
    >

    <SimpleModal/>
    </Modal>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  touchableOpacity:{
    backgroundColor:'orange',
    paddingHorizontal:50,

  },
  text:{
    marginVertical:20,
    fontSize:20
  }
})

export default Logout