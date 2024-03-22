// components/signup.js
import React, { Component,useState } from 'react';
import Input from './Input';
import { StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicator, ImageBackground } from 'react-native';
import firebase from '../../database/firebase';

const Signup = ({ navigation }) => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const updateInputVal = (val, prop) => {
      switch (prop) {
        case "displayName":
          setDisplayName(val);
          break;
        case "email":
          setEmail(val);
          break;
        case "password":
          setPassword(val);
          break;
        default:
          break;
      }
    };
  
    const registerUser = () => {
      console.log("Signing up...");
      if (email === "" || password === "") {
        Alert.alert("Enter details to signup!");
      } else {
        setIsLoading(true);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((res) => {
            console.log("User registered successfully!", res.user);
            res.user.updateProfile({
              displayName: displayName,
            });
            setIsLoading(false);
            setDisplayName("");
            setEmail("");
            setPassword("");
            navigation.navigate("EmailVerification"); // Navigate to the email verification screen
          })
          .catch((error) => {
            console.error("Error during sign-up:", error.message);
            setIsLoading(false);
            setErrorMessage(error.message);
          });
      }
    };
  
    if (isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
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
                                        values={displayName}
                                        onChangeText={(val) => updateInputVal(val, 'displayName')}
                                    />
                                    <Input placeholder="Email Address" keyboard="email-address"
                                        values={email}
                                        onChangeText={(val) => updateInputVal(val, 'email')}
                                    />
                                    <Input
                                        // title="Password"
                                        placeholder="Password"
                                        keyboard="default"
                                        is_password={true}
                                        values={password}
                                        onChangeText={(val) => updateInputVal(val, 'password')}
                                        maxLength={15}
                                        secureTextEntry={true}
                                    />



                                </View>
                                <View style={{ backgroundColor: '#081122', marginLeft: 20, width: 280, height: 40, borderRadius: 20, justifyContent: 'center', marginTop: 20, }}>
                                    <Text style={{ textAlign: 'center', color: '#FBFBFB', fontSize: 12, fontFamily: 'Montserrat', }}
                                        onPress={() => registerUser()}
                                    >SUBMIT</Text>
                                </View>

                                {/* Already have an account? Login */}
                                <View style={{ marginTop: 43 }}>
                                    <Text style={{ color: '#6C6C6C', fontSize: 12, textAlign: 'center', fontFamily: 'Montserrat', }}>
                                        Already have an account?{' '}
                                        <Text style={{ color: '#0C0C0C', fontFamily: 'Montserrat', }} onPress={() =>navigation.navigate('Login2')} >Login</Text>
                                    </Text>
                                </View>

                            </View>




                        </View>

                    </ImageBackground>

                </View>
            </>



        );
    }
export default Signup;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: "#fff",
    },
    inputStyle: {
      width: "100%",
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1,
    },
    loginText: {
      color: "#3740FE",
      marginTop: 25,
      textAlign: "center",
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
  });

// export default class Signup extends Component {

//     constructor() {
//         super();
//         this.state = {
//             displayName: '',
//             email: '',
//             password: '',
//             isLoading: false
//         }
//     }
//     updateInputVal = (val, prop) => {
//         const state = this.state;
//         state[prop] = val;
//         this.setState(state);
//     }
//     registerUser = () => {
//         if (this.state.email === '' && this.state.password === '') {
//             Alert.alert('Enter details to signup!')
//         } else {
//             this.setState({
//                 isLoading: true,
//             })
//             firebase
//                 .auth()
//                 .createUserWithEmailAndPassword(this.state.email, this.state.password)
//                 .then((res) => {
//                     res.user.updateProfile({
//                         displayName: this.state.displayName
//                     })
//                     console.log('User registered successfully!')
//                     this.setState({
//                         isLoading: false,
//                         displayName: '',
//                         email: '',
//                         password: ''
//                     })
//                     this.props.navigation.navigate('Login2')
//                 })
//                 .catch((error) => {
//                     // Handle errors during sign-up
//                     console.error("Error during sign-up:", error.message);
//                     this.setState({ isLoading: false });
//                 })
//         }
//     }
//     render() {
//         if (this.state.isLoading) {
//             return (
//                 <View style={{left: 0,
//                     right: 0,
//                     top: 0,
//                     bottom: 0,
//                     position: 'absolute',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     backgroundColor: '#fff'}}>
//                     <ActivityIndicator size="large" color="#9E9E9E" />
//                 </View>
//             )
//         }