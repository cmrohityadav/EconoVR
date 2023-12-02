import { StyleSheet, Text, View,KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OTPInputView from '@twotalltotems/react-native-otp-input'


const OTP = ({navigation}) => {
  return (
    <SafeAreaView
    style={{flex:1}}
    >
        <KeyboardAvoidingView
        behavior={Platform.OS=='ios' ? "padding":""}
            style={{

                height:"100%",
                width:"100%",
                backgroundColor:'#fff'
            }}

        >

            <View
            style={{

                flex:1,
                alignItems:'center',

            }}
            >
            <Text style={{fontSize:36, marginVertical:60,color:'#111'}}>
                Telegram
            </Text>

            <Text style={{fontSize:25,color:'#111'}}>Verify Phone Number</Text>

            <Text style={{fontSize:15,color:'#111'}}>Enter 4 digit code received on your </Text>
            <Text style={{fontSize:16,color:'#111',marginTop:14}}>+  30000**********06</Text>



            <View style={{width:'100%',paddingHorizontal:22}}>

                <OTPInputView

                    style={{width:'100%',height:200,paddingHorizontal:32}}
                    pinCount={4}
                    autoFocusOnLoad
                    codeInputFieldStyle={{
                        width:30,
                        height:45,
                        color:'#f4a135',
                        borderWidth:0,
                        borderBottomWidth:3,
                        borderBottomColor:'#111',
                        
                    }}

                    codeInputHighlightStyle={{borderColor:'#2ab12f'}}
                    onCodeFilled={()=> console.log(`code is ${code}`)}
                />

               


            </View>

            </View>


        </KeyboardAvoidingView>


    </SafeAreaView>
  )
}

export default OTP

const styles = StyleSheet.create({})