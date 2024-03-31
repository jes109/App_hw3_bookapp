import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons"

import AccountScreen from "../Screens/AccountScreen"

const Stack=createNativeStackNavigator();


const Account =({navigation})=>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:true,
        }}>
            <Stack.Screen name="acc" component={AccountScreen}
            options={{
                title:"",
                headerLeft:()=>(<MaterialCommunityIcons name="menu" size={24} onPress={() => navigation.openDrawer()}/>),
                headerRight:()=>(<MaterialCommunityIcons name="magnify" size={24}/>)
            }} />
        </Stack.Navigator>
    );
}

export default Account;