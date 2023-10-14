import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, } from 'react-native';
import Input from './Input';
import LinearGradient from 'react-native-linear-gradient';

const Forgot = (navigation) => {
    return (
        <View>

            <ImageBackground source={require('./mbg.png')} resizeMode="cover" style={{ height: 800, width: 400 }} >


                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ marginLeft: 93, marginTop: 45 }}>
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
                                marginTop: 3,

                            }
                        }
                    >

                        {/* value vision title */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 34 }}>
                            <View style={{ marginRight: 6 }}><Text style={{ color: '#34C9F9', fontSize: 30, fontWeight: 'bold' }}>value</Text></View>
                            <View style={{ backgroundColor: '#34C9F9', borderRadius: 12, width: 100 }}><Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>vision</Text></View>

                        </View>


                        {/* login msg */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 23 }}>
                            <Text style={{ textAlign: 'centre', color: '#6C6C6C',paddingHorizontal:8 }}>
                                Enter the email address associated with your account and we’ll send an email with instructions to reset your password
                            </Text>
                        </View>

                        {/* form */}
                        <View style={{ paddingHorizontal: 22, }}>
                            <Input placeholder="Email Address" keyboard="email-address" />



                        </View>
                        <View style={{ backgroundColor: '#081122', marginLeft: 20, width: 280, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 115, }}>
                            <Text style={{ textAlign: 'center', color: '#FBFBFB', fontSize: 12 }}>SEND OTP</Text>
                        </View>

                       

                    </View>




                </View>

            </ImageBackground>

        </View>
    )
}

export default Forgot

const styles = StyleSheet.create({})