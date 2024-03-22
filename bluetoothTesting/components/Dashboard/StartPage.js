import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartPage = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#081122', height: '100%' }}>

            {/* upper container */}
            <View style={{
                height: 540, backgroundColor: '#FFFFFF',

                display: 'flex',
                alignItems: 'center',

                width: '100%',
                borderBottomEndRadius: 400, borderBottomStartRadius: 400,
                borderRadius:80


            }}>

                {/* head set image */}
                <View style={{ marginTop: 50, display: 'flex', alignItems: 'center', }}>

                    <Image style={{ width: 300, height: 230 }}
                        source={require('./img/headVR.png')}

                    />


                </View>

                {/* heading */}

                <View style={{ marginTop: 18 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000000', fontFamily: 'Montserrat', }}>
                        Random VR World
                    </Text>
                </View>


                {/* discription */}
                <View style={{ marginTop: 22, marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 15, color: '#000000', fontFamily: 'Montserrat', }}>
                        Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here
                    </Text>
                </View>


            </View>

            {/* lower container */}
            <View style={{ backgroundColor: '#081122', height: 200, display: 'flex', alignItems: 'center' }}>

                <View style={{ marginTop: 80, backgroundColor: '#FFFFFF', height: 50, width: 250, borderRadius: 20, display: 'flex', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: '#081122', fontSize: 30, fontWeight: '500', fontFamily: 'Montserrat', }}
                        onPress={() => navigation.navigate('Dashboard')}
                    >Start</Text>
                </View>

            </View>




        </View>
    )
}

export default StartPage

const styles = StyleSheet.create({})