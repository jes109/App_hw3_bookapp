import React from "react";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../Navigation/HomeStack"
import Wishist from "./WishList"
import MyBook from "./Mybook"
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons"

const BottomTab=createBottomTabNavigator();

const BottomTabNavigator =()=>{
    const {colors}=useTheme();
    return(
        <BottomTab.Navigator initialRouteName="tabhome"
        screenOptions={{
            tabBarActiveTintColor:colors.purple,
            tabBarInactiveTintColor:colors.gray,
            headerShown:false,
            tabBarLabelStyle:{ fontSize:12,fontWeight:400 }
        }} >
            <BottomTab.Screen name="tabhome" component={HomeStack} 
            options={{
                title:"Home",
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="home" color={color} size={24}/>
                )
            }}/>
            <BottomTab.Screen name="Wishlist" component={Wishist} 
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="bookmark"  color={color} size={24}/>
                )
            }}/>
            <BottomTab.Screen name="My Books" component={MyBook}
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="book-open"  color={color} size={24}/>
                )
            }} />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;