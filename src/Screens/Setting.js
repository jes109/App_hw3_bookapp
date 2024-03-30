import React from "react";
import { Center ,Text ,Image} from "@gluestack-ui/themed";

const Setting =()=>{
    return(
        <Center>
            <Text>Setting</Text>
            <Image alt="book" source={require('../../img/books/fashinopolis.png')} />
        </Center>
    );
}

export default Setting;