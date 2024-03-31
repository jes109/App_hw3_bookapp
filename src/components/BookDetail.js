import React from "react";
import { Pressable, Text,Box,Image} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import Stars from "./Stars";

const BookDetail=({book})=>{
    const {navigate} =useNavigation();
    const {img,author,title,destination,star}=book;
    return(
        <Box >       
            <Pressable onPress={()=>destination?navigate('Detail',book):null}>
                <Image w={140} h={200}  mb={14}  resizeMode="contain" source={{uri:img}} alt={title}/>      
            </Pressable>
            <Stars star={star} />
            <Text ml={2} fontSize={16} fontWeight={500} color="black">{title}</Text>
            <Text mt={8} ml={2} fontSize={12}  fontWeight={500} color="black" opacity={0.5}>{author}</Text>
        </Box>
    )
}

export default BookDetail;