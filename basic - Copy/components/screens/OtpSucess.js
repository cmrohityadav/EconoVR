import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, } from 'react-native';
import Input from './Input';
import LinearGradient from 'react-native-linear-gradient';

const OtpSucess = ({navigation}) => {
    return (
        <View>

            <ImageBackground source={require('./mbg.png')} resizeMode="cover" style={{ height: 800, width: 400 }} >


                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ marginLeft: 93,marginTop:45 }}>
                        <Image style={{ width: 353, height: 248 }}
                            source={require('./vrh.png')}
                        />
                    </View>
                    {/* { main card} */}
                    <View
                        style={
                            {
                                backgroundColor: 'white',
                                height: 450,
                                width: 320,
                                borderRadius: 20,
                                marginTop:3,
                                
                            }
                        }
                    >

                        {/* value vision title */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 34 }}>
                            <View style={{ marginRight: 6 }}><Text style={{ color: '#081122', fontSize: 30 ,fontWeight:'bold',fontFamily:'Montserrat'}}>value</Text></View>
                            <View style={{ backgroundColor: '#081122', borderRadius: 12, width: 100 }}><Text style={{ fontSize: 30, textAlign: 'center',fontWeight:'bold',color:'white',fontFamily:'Montserrat'}}>vision</Text></View>

                        </View>

                        {/* sucess icon */}
                        <View style={{marginTop:26,marginLeft:110}}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('./suc.png')}
                        />

                        </View>

                        {/* congratulations text */}
                        <View style={{margin:23}}>
                            <Text style={{textAlign:'center',fontWeight:'900',color:'#000000',fontFamily:'Montserrat',}}>
                            Congratulations! You’ve successfully created an acccount
                            </Text>
                        </View>


                       
                        

                       
                        <View style={{ backgroundColor: '#081122', marginLeft:20, width: 280, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 20,}}>
                            <Text style={{ textAlign: 'center', color: '#FBFBFB', fontSize: 12 ,fontFamily:'Montserrat',}}
                            onPress={() => navigation.navigate('Dashboard')}
                            >GO TO DASHBOARD</Text>
                        </View>

                       

                    </View>




                </View>

            </ImageBackground>

        </View>
    )
}

export default OtpSucess

const styles = StyleSheet.create({})