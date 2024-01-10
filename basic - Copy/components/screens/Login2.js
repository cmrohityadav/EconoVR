// components/login.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ImageBackground, Image } from 'react-native';
import firebase from '../../database/firebase';
import Input from './Input';

export default class Login2 extends Component {

    constructor() {
        super();
        this.state = {
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
    userLogin = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signin!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    console.log(res)
                    console.log('User logged-in successfully!')
                    this.setState({
                        isLoading: false,
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('Dashboard')
                })
                .catch(error => this.setState({ errorMessage: error.message }))
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
                                    <Text style={{ textAlign: 'centre', color: '#6C6C6C', fontFamily: 'Montserrat' }}>
                                        Sign in to continue using value vision
                                    </Text>
                                </View>

                                {/* form */}
                                <View style={{ paddingHorizontal: 22, }}>
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
                                    <Text style={{ color: '#03bafc', fontSize: 16, textAlign: 'right', marginVertical: 19, fontFamily: 'Montserrat' }} >
                                        Forgot Password?
                                    </Text>


                                </View>
                                <View style={{ backgroundColor: '#081122', marginLeft: 20, width: 280, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 12, }}>
                                    <Text style={{ textAlign: 'center', color: '#FBFBFB', fontSize: 12, fontFamily: 'Montserrat', }}
                                        onPress={() => this.userLogin()}
                                    >LOGIN</Text>
                                </View>

                                {/* Already have an account? Login */}
                                <View style={{ marginTop: 43 }}>
                                    <Text style={{ color: '#6C6C6C', fontSize: 12, textAlign: 'center', fontFamily: 'Montserrat', }}>
                                        Dont't have an account?{' '}
                                        <Text style={{ color: '#0C0C0C' }} onPress={() => this.props.navigation.navigate('Signup')}>Signup</Text>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});