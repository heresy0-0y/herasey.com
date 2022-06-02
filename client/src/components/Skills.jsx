import { ListIcon, List, HStack, ListItem, Box } from "@chakra-ui/react";
import {
  SiHeroku,
  SiRubyonrails,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiMongodb,
} from "react-icons/si";
import { Container } from "./Container";

const Skills = () => {
  return (
    <Box h="50vh">
      <HStack spacing="2rem" justify="center">
        <List>
          <ListItem>
            <ListIcon as={SiReact} />
            React
          </ListItem>
          <ListItem>
            <ListIcon as={SiNextdotjs} />
            Next.js
          </ListItem>
          <ListItem>
            <ListIcon as={SiExpress} />
            Express.js
          </ListItem>
          <ListItem>
            <ListIcon as={SiRedux} />
            Redux
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListIcon as={SiRubyonrails} />
            Ruby on Rails
          </ListItem>
          <ListItem>
            <ListIcon as={SiPostgresql} />
            postgresql
          </ListItem>
          <ListItem>
            <ListIcon as={SiMongodb} />
            MongoDB
          </ListItem>
          <ListItem>
            <ListIcon as={SiHeroku} />
            heroku
          </ListItem>
        </List>
      </HStack>
    </Box>
  );
};
export default Skills;
