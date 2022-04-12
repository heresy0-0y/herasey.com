import React from 'react'; 
import {Center, Input, Button, Textarea, FormControl, VStack, Text} from '@chakra-ui/react'

export const Contact = (props) => {
    return (
        <Center>
            <VStack spacing='1.5rem'>
                <Text>get in touch</Text>
                <Input placeholder="your email address"/>
                <Textarea placeholder='your message goes here (optional)' />
                </VStack>
        </ Center>
    )
}