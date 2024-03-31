import React from "react";
import { Box, FlatList, ScrollView, SectionList,Text } from "@gluestack-ui/themed";

import BookDetail from "../components/BookDetail";

import books from "../json/books.json"

const HomeScreen =()=>{
    
    const renderItem=({item})=>(
        <BookDetail book={item}/>
    )
    return(
        <ScrollView bg="white">
            <Box h={25}/>
             <Box my={8}>
                <Text  mb={16} pl={20} fontSize={24} fontWeight={500} color="black">{books[0].title}</Text>
                <FlatList
                contentContainerStyle={{
                    paddingRight:20,
                    paddingLeft:20,
                    gap:16
                }}
                data={books[0].data}
                renderItem={renderItem}
                keyExtractor={(item)=>item.title}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </Box>
            <Box my={8}>
                <Text mb={16} pl={20} fontSize={24} fontWeight={500} color="black">{books[1].title}</Text>
                <FlatList
                contentContainerStyle={{
                    paddingRight:20,
                    paddingLeft:20,
                    gap:16}}
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

export default HomeScreen;