import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartPage = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#081122' }}>

            <View style={{ height: 600, backgroundColor: '#FFFFFF', borderBottomEndRadius: 150, borderBottomStartRadius: 150 }}>
                <View style={{marginTop:50 ,display:'flex',alignItems:'center',}}>
                
                    <Image style={{ width: 200, height:200  }}
                        source={require('./img/ManVRGlasses.png')}
                        
                    />
                    <Image style={{ width: 300, height:132,  }}
                        source={require('./img/Ellipse.png')}
                    />
                    
                </View>

            </View>

            <View style={{ backgroundColor: '#081122', height: 200 }}>


            </View>




        </View>
    )
}

export default StartPage

const styles = StyleSheet.create({})