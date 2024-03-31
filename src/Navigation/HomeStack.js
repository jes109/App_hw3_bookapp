import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons"
import { useState } from "react";

import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen"

const Stack=createNativeStackNavigator();

const HomeStack = ({navigation}) =>{
    const [Press, setPress] = useState(false);
    const markPress = () => {
        setPress(!Press);
    }
    let iconName = Press? "bookmark":"bookmark-outline";
    let iconColor = Press? "#6200EE":"black";

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:true,
        }}>
            <Stack.Screen name="homepage" component={HomeScreen}
            options={{
                title:"",
                headerLeft:()=>(<MaterialCommunityIcons name="menu" size={24} onPress={() => navigation.openDrawer()}/>),
                headerRight:()=>(<MaterialCommunityIcons name="magnify" size={24}/>)
            }} />
            <Stack.Screen name="Detail" component={DetailScreen} 
            options={{
                title:"",
            headerLeft:()=>(<MaterialCommunityIcons name="chevron-left" size={24} onPress={() => navigation.goBack()}/>),
            headerRight:()=>(<MaterialCommunityIcons name={iconName} size={24} color={iconColor}
            onPress={markPress}/>)
            }}/>
        </Stack.Navigator>
    );
}

export default HomeStack;