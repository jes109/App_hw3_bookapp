import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons"

import SettingScreen from "../Screens/SettinScreen"

const Stack=createNativeStackNavigator();


const Setting =({navigation})=>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:true,
        }}>
            <Stack.Screen name="set" component={SettingScreen}
            options={{
                title:"",
                headerLeft:()=>(<MaterialCommunityIcons name="menu" size={24} onPress={() => navigation.openDrawer()}/>),
                headerRight:()=>(<MaterialCommunityIcons name="magnify" size={24}/>)
            }} />
        </Stack.Navigator>
    );
}

export default Setting;