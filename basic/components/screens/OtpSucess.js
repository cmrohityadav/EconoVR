import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import LinearGradient from 'react-native-linear-gradient';


const OtpSucess = ({ navigation }) => (
    <View style={styles.container}>


        {/* main Background Image */}
        <ImageBackground source={require('./mbg.png')} resizeMode="cover" style={styles.image}>


            {/* image of men with headset */}
            <View style={{ alignItems: 'center' }}>

                <Image
                    source={require('./vrh.png')}
                />
            </View>


            {/* form for user login card */}
            <View
                style={{
                    elevation: 10,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    margin: 10,
                    marginTop: -20,
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    height: 390,
                }}>

                {/* title main container */}
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    {/* sub title container */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',



                    }}>

                        {/* container for value  */}
                        <View style={{

                            paddingRight: 5

                        }}>

                            <Text
                                style={{
                                    fontSize: 40,
                                    fontWeight: 'bold',
                                    color: '#03bafc',
                                    textAlign: 'center',
                                }}>
                                value
                            </Text>

                        </View>



                        {/* container for vision */}


                        <View style={{

                            paddingLeft: 5,
                            backgroundColor: '#03bafc',
                            borderRadius: 12

                        }}>
                            <Text
                                style={{
                                    fontSize: 40,
                                    fontWeight: 'bold',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    paddingHorizontal: 10,
                                    borderColor: '#000000',

                                }}>
                                vision
                            </Text>
                        </View>


                    </View>
                    {/* verify msg Msg */}

                </View>

                {/* sucesse icon  */}
                <View style={
                    { alignItems: 'center' }
                    }>

                    <Image
                        source={require('./suc.png')}
                    />
                </View>
                









                {/* username input */}

                <LinearGradient
                    onPress={() => { }}
                    colors={['#141414', '#141414', '#141414']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        borderRadius: 100,
                        width: 150,

                        alignSelf: 'center',
                        alignItems: 'center',
                        paddingVertical: 5,
                        marginTop: 5,
                        marginBottom: 10,
                        padding: 25,
                    }}>
                    <Text style={{ color: 'white', fontSize: 19 }}>GO TO DASHBOARD</Text>
                </LinearGradient>

            </View>




        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});

export default OtpSucess;