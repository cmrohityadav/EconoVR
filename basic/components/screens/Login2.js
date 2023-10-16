import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, } from 'react-native';
import Input from './Input';
import LinearGradient from 'react-native-linear-gradient';

const Login2 = ({navigation}) => {
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
                            <View style={{ marginRight: 6 }}><Text style={{ color: '#34C9F9', fontSize: 30 ,fontWeight:'bold',fontFamily:'MontserratBlack-3zOvZ'}}>value</Text></View>
                            <View style={{ backgroundColor: '#34C9F9', borderRadius: 12, width: 100 }}><Text style={{ fontSize: 30, textAlign: 'center',fontWeight:'bold',color:'white'}}>vision</Text></View>

                        </View>


                        {/* login msg */} 
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 23 }}>
                            <Text style={{ textAlign: 'centre', color: '#6C6C6C' }}>
                                Sign in to continue using value vision
                            </Text>
                        </View>

                        {/* form */}
                        <View style={{ paddingHorizontal: 22, }}>
                            <Input placeholder="Email Address" keyboard="email-address" />
                            <Input
                                // title="Password"
                                placeholder="Password"
                                keyboard="default"
                                is_password={true}
                            />
                            <Text style={{ color: '#03bafc', fontSize: 16, textAlign: 'right' }}  onPress={() => navigation.navigate('Forgot')}>
                                Forgot Password?
                            </Text>    


                        </View>
                        <View style={{ backgroundColor: '#081122', marginLeft:20, width: 280, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 20,}}>
                            <Text style={{ textAlign: 'center', color: '#FBFBFB', fontSize: 12 }}
                            onPress={() => navigation.navigate('Dashboard')}
                            >LOGIN</Text>
                        </View>

                        {/* Already have an account? Login */}
                        <View style={{ marginTop: 43 }}>
                            <Text style={{ color: '#6C6C6C', fontSize: 12, textAlign: 'center' }}>
                                Dont't have an account?{' '}
                                <Text style={{ color: '#0C0C0C' }} onPress={() => navigation.navigate('Signup')}>Signup</Text>
                            </Text>
                        </View>

                    </View>




                </View>

            </ImageBackground>

        </View>
    )
}

export default Login2

const styles = StyleSheet.create({})