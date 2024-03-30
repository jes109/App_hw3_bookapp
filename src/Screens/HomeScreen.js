import React from "react";
import { Box, SectionList,Text } from "@gluestack-ui/themed";

import books from "../json/books.json"

import BookDetail from "../components/BookDetail";

const HomeScreen =()=>{
    return(
        <Box>
            <SectionList 
            sections={books}
            renderSectionHeader={renderHeader}
            renderItem={renderItem}
            keyExtractor={(title)=>title}
            >
        </SectionList>
        </Box>
    );
}

const renderHeader=({section})=>(
    <Text fontSize={24} fontWeight={500} color="black" >{section.title}</Text>
)

const renderItem=({item})=>(
    <BookDetail book={item}/>
)

export default HomeScreen;