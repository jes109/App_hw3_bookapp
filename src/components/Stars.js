import { HStack } from "@gluestack-ui/themed";
import React from "react";
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons"

const Stars =(props)=>{
    let stars=[];
    for (let i=1;i<=5;i++){
        if (i<=props.star) {
            stars.push(<MaterialCommunityIcons name="star" color="#FFC41F" size={14} key={i}/>)
        }
        else {
            stars.push(<MaterialCommunityIcons name="star" color="#EDEDEF" size={14} key={i}/>)
        }
    }
    return(
        <HStack>
            {stars}
        </HStack>
    )
}


export default Stars;