import { StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'


const WIDTH=Dimensions.get('window').width;
const HEIGHT_MODAL=150
const SimpleModal = () => {
  return (
   <TouchableOpacity
   disabled={true}
   style={styles.container}
   

   >

    <View style={styles.modal}>
    <View style={styles.textView}>
    <Text> Sample  des</Text>

    </View>


    </View>
   </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        height:HEIGHT_MODAL,
        width:WIDTH-80,
        paddingTop:10,
        backgroundColor:'white',
        borderRadius:10
    }
})
export default SimpleModal

