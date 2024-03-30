import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons"

import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen"

const Stack=createNativeStackNavigator();

const HomeStack = ({navigation}) =>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:true,
            headerLeft:()=>(<MaterialCommunityIcons name="menu" size={24} onPress={() => navigation.openDrawer()}/>),
            headerRight:()=>(<MaterialCommunityIcons name="magnify" size={24}/>)
        }}>
            <Stack.Screen name="homepage" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;