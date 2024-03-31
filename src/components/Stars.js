import { HStack } from "@gluestack-ui/themed";
import React from "react";
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons"

const Stars =({star})=>{
    if (star){
    let stars=[];
    for (let i=1;i<=5;i++){
        if (i<=star) {
            stars.push(<MaterialCommunityIcons name="star" color="#FFC41F" size={16} key={i}/>)
        }
        else {
            stars.push(<MaterialCommunityIcons name="star" color="#EDEDEF" size={16} key={i}/>)
        }
    }
    return(
        <HStack mb={6}>
            {stars}
        </HStack>
    )}
}


export default Stars;