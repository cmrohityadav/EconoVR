// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './components/screens/Signup';
import OtpVerification from './components/screens/OtpVerification';
import OtpSucess from './components/screens/OtpSucess';
import Login2 from './components/screens/Login2';
import Forgot from './components/screens/Forgot';
import OtpForForgotPassword from './components/screens/OtpForForgotPassword';
import SetupNewPassword from './components/screens/SetupNewPassword';
import OtpSucessForForgot from './components/screens/OtpSucessForForgot';
import Dashboard from './components/Dashboard/Dashboard';

import Logout from './components/Dashboard/ScreenForDashBoard/Logout';
import StartPage from './components/Dashboard/StartPage';
import OTP from './components/screens/OTP';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
       
      
       
        <Stack.Screen name="Login2" component={Login2} />
        
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="OtpSucess" component={OtpSucess} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="OtpForForgotPassword" component={OtpForForgotPassword} />
        <Stack.Screen name="SetupNewPassword" component={SetupNewPassword} />
        <Stack.Screen name="OtpSucessForForgot" component={OtpSucessForForgot} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="StartPage" component={StartPage} />
        {/* <Stack.Screen name="OTP" component={OTP} /> */}

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;