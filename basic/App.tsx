// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import OtpVerification from './components/screens/OtpVerification';
import OtpSucess from './components/screens/OtpSucess';
import Login2 from './components/screens/Login2';
import Forgot from './components/screens/Forgot';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="OtpSucess" component={OtpSucess} />
        <Stack.Screen name="Forgot" component={Forgot} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;