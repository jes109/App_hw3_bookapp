import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons"

import BottomTabNavigator from "./BottomTabNavigator" 

import Setting from "../Screens/Setting"
import Account from "../Screens/Account"
import CustomDrawer from "../components/CustomDrawer";

const Drawer =createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
    return(
        <Drawer.Navigator initialRouteName="Home"
        drawerContent={props=><CustomDrawer {...props}/>}
        screenOptions={{
            headerShown:false,
            headerLeft:()=>(<MaterialCommunityIcons name="menu" size={24} onPress={() => navigation.openDrawer()}/>),
            headerRight:()=>(<MaterialCommunityIcons name="magnify" size={24}/>),
            drawerActiveBackgroundColor:"#e1e3f7",
            drawerActiveTintColor:"#6200EE",
            drawerStyle:{ width:300},
            
            drawerLabelStyle:{fontSize:14, fontWeight:400, }
        }}
        >
            <Drawer.Screen name="Home" component={BottomTabNavigator}
            options={{
                tilte:"e",
                drawerIcon:({color})=>(
                    <MaterialCommunityIcons name="home"size={24} color={color} />
                )
            }}
            />
            <Drawer.Screen name="Account" component={Account}
            options={{
                drawerIcon:({color})=>(
                    <MaterialCommunityIcons name="account-circle" color={color} size={24}/>
                )
            }}
            />
            <Drawer.Screen name="Setting" component={Setting}
            options={{
                drawerIcon:({color})=>(
                    <MaterialCommunityIcons name="cog" color={color} size={24}/>
                )
            }}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;