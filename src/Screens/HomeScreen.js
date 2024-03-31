import React from "react";
import { Box, FlatList, ScrollView, SectionList,Text } from "@gluestack-ui/themed";

import BookDetail from "../components/BookDetail";

import books from "../json/books.json"

const HomeScreen =()=>{
    return(
        <ScrollView bg="white">
             <Box pl={20} my={8}>
                <Text fontSize={24} fontWeight={500} color="black">{books[0].title}</Text>
                <FlatList
                mt={20}
                data={books[0].data}
                renderItem={renderItem}
                keyExtractor={(item)=>item.title}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </Box>
            <Box pl={20} my={8} >
                <Text fontSize={24} fontWeight={500} color="black">{books[1].title}</Text>
                <FlatList
                mt={20}
                data={books[1].data}
                renderItem={renderItem}
                keyExtractor={(item)=>item.title}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </Box>
        </ScrollView>
    )
}

/*const renderHeader=({section})=>(
    <Text fontSize={24} fontWeight={500} color="black" >{section.title}</Text>
)*/

const renderItem=({item})=>(
    <BookDetail book={item}/>
)
export default HomeScreen;