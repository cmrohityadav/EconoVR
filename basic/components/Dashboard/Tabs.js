import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardHome from "./ScreenForDashBoard/DashboardHome";
import Profile from "./ScreenForDashBoard/Profile";
import Settings from "./ScreenForDashBoard/Settings";
import Logout from "./ScreenForDashBoard/Logout";
import { View, Text, Image } from 'react-native'


const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (

        <Tab.Navigator screenOptions={{ headerShown: false ,tabBarStyle:{
            position:'absolute',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            height:60
        },tabBarShowLabel:false
        }}  >

        {/* dashboard tab */}
            <Tab.Screen name="DashboardHome" component={DashboardHome} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image

                            source={require('./img/home.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#34C9F9':'#081122',

                            }}
                        />
                        <Text style={{color:focused? '#34C9F9':'#081122',fontFamily:'Montserrat',}}>Dashboard</Text>


                    </View>
                ),
            }} />

            {/* profile tab */}
            <Tab.Screen name="Profile" component={Profile}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image

                            source={require('./img/profile.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#34C9F9':'#081122',

                            }}
                        />
                        <Text style={{color:focused? '#34C9F9':'#081122',fontFamily:'Montserrat',}}>Profile</Text>


                    </View>
                ),
            }}
             />


             {/* setting tab */}
            <Tab.Screen name="Settings" component={Settings}
            
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image

                            source={require('./img/Setting.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#34C9F9':'#081122',

                            }}
                        />
                        <Text style={{color:focused? '#34C9F9':'#081122',fontFamily:'Montserrat',}}>Setting</Text>


                    </View>
                ),
            }} />


            {/* logout tab */}
            <Tab.Screen name="Logout" component={Logout}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image

                            source={require('./img/logout.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#34C9F9':'#081122',

                            }}
                        />
                        <Text style={{color:focused? '#34C9F9':'#081122',fontFamily:'Montserrat',}}>Logout</Text>


                    </View>
                ),
            }} />
        </Tab.Navigator>
    )
}

export default Tabs