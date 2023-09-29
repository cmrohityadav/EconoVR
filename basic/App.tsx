
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"


//screens
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';




export type RootStackParamList = {
  Home: undefined;
  Login: {productId: string}
  Signup:{productId:string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Home"
        }}
        />
        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title: "Login page"
        }}
        />
        <Stack.Screen
        name='Signup'
        component={Signup}
        options={{
          title: "Signup page"
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;