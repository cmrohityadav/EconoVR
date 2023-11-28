import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardHome from "./ScreenForDashBoard/DashboardHome";
import Profile from "./ScreenForDashBoard/Profile";
import Settings from "./ScreenForDashBoard/Settings";
import Logout from "./ScreenForDashBoard/Logout";

const Tab=createBottomTabNavigator();

const Tabs=()=>{

    return (

        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="DashboardHome" component={DashboardHome}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Settings" component={Settings}/>
            <Tab.Screen name="Logout" component={Logout}/>
        </Tab.Navigator>
    )
}

export default Tabs