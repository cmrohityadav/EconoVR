import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Input from './Input'

const Login3 = () => {
  return (
    <View>
      <Background>
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
      </Background>
    </View>
  )
}

export default Login3

const styles = StyleSheet.create({})