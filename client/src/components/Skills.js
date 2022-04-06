import {List, HStack, ListItem} from '@chakra-ui/react'
import {Container} from './Container'

export const Skills = () => {
    return (
        <Container>
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
        </Container>
    )
}