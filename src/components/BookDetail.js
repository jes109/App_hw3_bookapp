import React from "react";
import { Pressable, Text,Box,Image} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const BookDetail=({book})=>{
    const {navigate} =useNavigation();
    const {img,author,title}=book;
    return(
        <Box>             
            <Pressable onPress={()=>navigate('Detail',book)}>
            <Text>{title}</Text>
            </Pressable>
            <Text fontSize={12}>{author}</Text>
        </Box>
    )
}

export default BookDetail;