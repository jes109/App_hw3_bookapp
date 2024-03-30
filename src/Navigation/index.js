import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./DrawerNavigator"

import Theme from "../Theme"


const Navigation = () => {
        return(
            <NavigationContainer theme={Theme}>
                <DrawerNavigator />
            </NavigationContainer>
        );
}

export default Navigation;