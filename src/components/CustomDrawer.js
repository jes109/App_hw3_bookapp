import React from "react";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { VStack ,Image ,Text, Divider} from "@gluestack-ui/themed";

const CustomDrawer =(props)=>{
    return(
        <DrawerContentScrollView>
            <VStack h={148} p={16} pt={40} justifyContent="space-between" >
                <Image rounded="$full" w={48} h={48} alt="avatar" source={require("../../img/avatar.jpg")} />
                <Text fontSize={24} fontWeight={500} lineHeight={28} color="black">May</Text>
            </VStack>
            <Divider mb={8}/>
            <DrawerItemList {...props}  />
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;