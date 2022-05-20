import {List, HStack, ListItem, Box} from '@chakra-ui/react'
import {Container} from './Container'

export const Skills = () => {
    return (
        <Box boxSize="full">
        <HStack spacing="2rem">
            <List>
                <ListItem>
                    React
                </ListItem>
                <ListItem>
                    Next.js
                </ListItem>
                <ListItem>
                    Express.js
                </ListItem>
                <ListItem>
                    HTML + CSS
                </ListItem>
                <ListItem>

                </ListItem>
            </List>
            <List>
                <ListItem>
                    Ruby on Rails
                </ListItem>
                <ListItem>
                    postgresql
                </ListItem>
                <ListItem>
                    MongoDB
                </ListItem>
            </List>
            </HStack>
            </Box>

    )
}