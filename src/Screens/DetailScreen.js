import React from "react";
import {Image, Box ,Text, HStack, FlatList, VStack } from "@gluestack-ui/themed";

import Stars from "../components/Stars"

const DetailScreen =({route})=>{
    const {title,img,author,star}=route.params;
    return(
        <Box pt={8} bg="white" alignItems="center" flex={1}>
            <Image w={210} h={300} source={{uri:img}} alt={title}/>
            <VStack mt={32} alignItems="center">
            <Text fontSize={24} fontWeight={500} color="black">{title}</Text>
            <Text mt={10} fontSize={14} fontWeight={400} color="#666666">{author}</Text>
            <HStack mt={8}>
                <Stars star={star}/>
                <Text fontSize={14} fontWeight={400} color="black">{star}.0 </Text>
                <Text fontSize={14} fontWeight={400} color="#666666">/ 5.0</Text>
            </HStack>
            <Text mt={16} textAlign="center" w={320} fontSize={14} fontWeight={400} lineHeight={24} color="black">A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.</Text>
            </VStack>
        </Box>
    );
}

export default DetailScreen;