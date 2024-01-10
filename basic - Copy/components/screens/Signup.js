// components/signup.js
import React, { Component } from 'react';
import Input from './Input';
import { StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicator, ImageBackground } from 'react-native';
import firebase from '../../database/firebase';

export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false
        }
    }
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signup!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.displayName
                    })
                    console.log('User registered successfully!')
                    this.setState({
                        isLoading: false,
                        displayName: '',
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('Login2')
                })
                .catch((error) => {
                    // Handle errors during sign-up
                    console.error("Error during sign-up:", error.message);
                    this.setState({ isLoading: false });
                })
        }
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff'}}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <>
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
                                    <Text style={{ textAlign: 'centre', color: '#6C6C6C', fontFamily: 'Montserrat', }}>
                                        Sign Up to create an account
                                    </Text>
                                </View>

                                {/* form */}
                                <View style={{ paddingHorizontal: 22, paddingBottom: 10 }}>
                                    <Input placeholder="Username" keyboard="default"
                                        values={this.state.displayName}
                                        onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                                    />
                                    <Input placeholder="Email Address" keyboard="email-address"
                                        values={this.state.email}
                                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                                    />
                                    <Input
                                        // title="Password"
                                        placeholder="Password"
                                        keyboard="default"
                                        is_password={true}
                                        values={this.state.password}
                                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                                        maxLength={15}
                                        secureTextEntry={true}
                                    />



                                </View>
                                <View style={{ backgroundColor: '#081122', marginLeft: 20, width: 280, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 20, }}>
                                    <Text style={{ textAlign: 'center', color: '#FBFBFB', fontSize: 12, fontFamily: 'Montserrat', }}
                                        onPress={() => this.registerUser()}
                                    >SUBMIT</Text>
                                </View>

                                {/* Already have an account? Login */}
                                <View style={{ marginTop: 43 }}>
                                    <Text style={{ color: '#6C6C6C', fontSize: 12, textAlign: 'center', fontFamily: 'Montserrat', }}>
                                        Already have an account?{' '}
                                        <Text style={{ color: '#0C0C0C', fontFamily: 'Montserrat', }} onPress={() => this.props.navigation.navigate('Login2')} >Login</Text>
                                    </Text>
                                </View>

                            </View>




                        </View>

                    </ImageBackground>

                </View>
            </>



        );
    }
}
