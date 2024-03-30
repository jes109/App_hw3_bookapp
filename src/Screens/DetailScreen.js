import React from "react";
import { Center ,Text } from "@gluestack-ui/themed";

const DetailScreen =({route})=>{
    const {title}=route.params;
    return(
        <Center>
            <Text>{title}</Text>
        </Center>
    );
}

export default DetailScreen;