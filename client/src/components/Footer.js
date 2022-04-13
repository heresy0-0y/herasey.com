import { Flex } from '@chakra-ui/react'
import {ContactContainer as Contact} from './ContactContainer'

export const Footer = (props) => ( 
<Flex as="footer" py="8rem" {...props} >
    <Contact/>
</Flex>
)