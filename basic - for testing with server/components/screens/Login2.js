import React, { useState } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, } from 'react-native';
import Input from './Input';
import axios from 'axios';

const Login2 = ({ navigation }) => {
    const [inputEmail, setInputEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState("")
    const handleInputEmailChange = (value) => {
        setInputEmail(value);
        setErrorMessage("")
    };
    const [inputPassword, setInputPassword] = useState('');
    const handleInputPasswordChange = (value) => {
        setErrorMessage("")
        setInputPassword(value);
    };
    console.log(inputEmail, inputPassword)
    const handleLogin = async () => {
        try {
            const userDetail = {
                email: inputEmail,
                password: inputPassword
            }
            console.log(userDetail)
            await axios.post("http://192.168.123.5:5000/api/v1/user/login", userDetail)
                .then(res => {
                    console.log(res)
                    if (res.data.success === true) {
                        navigation.navigate('Dashboard')
                    }
                })


        } catch (error) {
            // console.error('Error logging in:', error);
            if (error.response) {
                // Server responded with a status code
                setErrorMessage(error.response.data.message); // Set error message from server
            } else if (error.request) {
                // Request made but no response received
                setErrorMessage('Network error. Please try again later.');
            } else {
                // Something else went wrong
                setErrorMessage('An unexpected error occurred.');
            }
        }
    }
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
                            <View style={{ marginRight: 6 }}><Text style={{ color: '#081122', fontSize: 30, fontWeight: 'bold', fontFamily: 'Montserrat' }}>value</Text></View>
                            <View style={{ backgroundColor: '#081122', borderRadius: 12, width: 100 }}><Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: 'white', fontFamily: 'Montserrat' }}>vision</Text></View>

                        </View>


                        {/* login msg */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 23 }}>
                            <Text style={{ textAlign: 'centre', color: '#6C6C6C', fontFamily: 'Montserrat' }}>
                                Sign in to continue using value vision
                            </Text>


                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5,marginLeft:4,paddingTop:5 }}>
                            {errorMessage && <Text style={{ textAlign: 'centre', color: '#Ff0000', fontFamily: 'Montserrat',fontSize:15 }}>{errorMessage}</Text>}
                        </View>

                        {/* form */}
                        <View style={{ paddingHorizontal: 22, }}>
                            <Input placeholder="Email Address" keyboard="email-address"
                                onInputChange={handleInputEmailChange}
                            />
                            <Input
                                // title="Password"
                                placeholder="Password"
                                keyboard="default"
                                is_password={true}
                                onInputChange={handleInputPasswordChange}
                            />
                            <Text style={{ color: '#03bafc', fontSize: 16, textAlign: 'right', marginVertical: 19, fontFamily: 'Montserrat' }} onPress={() => navigation.navigate('Forgot')}>
                                Forgot Password?
                            </Text>


                        </View>
                        <View style={{ backgroundColor: '#081122', marginLeft: 20, width: 280, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 12, }}>
                            <Text style={{ textAlign: 'center', color: '#FBFBFB', fontSize: 12, fontFamily: 'Montserrat', }}
                                onPress={handleLogin}
                            >LOGIN</Text>
                        </View>

                        {/* Already have an account? Login */}
                        <View style={{ marginTop: 43 }}>
                            <Text style={{ color: '#6C6C6C', fontSize: 12, textAlign: 'center', fontFamily: 'Montserrat', }}>
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