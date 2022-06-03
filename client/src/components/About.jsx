import { Text, Center } from "@chakra-ui/react";

const About = () => {
  const aboutMe = `i am a full stack developer
    with a curiosity as vast as the web. i have always known i wanted to be a learner for life and hopefully make this world an easier place to thrive; when i discovered the magic of building software, i was flooded with the relief that comes with finding one's purpose.`
  return (
    <Center h="50vh">
      <Text align="center">{aboutMe}</Text>
    </Center>
  );
};

export default About;
