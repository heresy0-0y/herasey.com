import { Flex } from '@chakra-ui/react'
import {Contact} from './Contact'

export const Footer = (props) => ( 
<Flex as="footer" py="8rem" {...props} >
    <Contact/>
</Flex>
)