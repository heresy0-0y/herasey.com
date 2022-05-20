import { Flex } from '@chakra-ui/react'
import {ContactContainer as Contact} from './ContactContainer'

export const Footer = (props) => ( 
<Flex as="footer" mt="50%" {...props} >
    <Contact/>
</Flex>
)