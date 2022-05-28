import { Text, Center } from "@chakra-ui/react";

const About = () => {
  const aboutMe = "i am a full stack developer with a passion for learning and building things that help people.";
  return (
    <Center h="50vh">
      <Text align="center">{aboutMe}</Text>
    </Center>
  );
};

export default About;
