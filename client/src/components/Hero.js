import { Flex, Heading, VStack, Text } from '@chakra-ui/react'

export const Hero = ({ title, title2 }) => (
  <Flex height="100vh">
    <VStack mt="4rem" mr="3rem" >
    <Text
      fontSize="10vw"
      bgGradient="linear(to-l, teal.700, blue.800)"
      bgClip="text"
      orientation="horizontal"
      >
        hera sey
    </Text>
    
    
      <Heading    fontSize="10vw" bgClip="text"  bgGradient="linear(to-l, yellow.200, teal.500)"
>
        software engineer
      </Heading>
      </VStack>
  </Flex>
)

Hero.defaultProps = {
  title: 'hera',
  title2: 'sey',

}
