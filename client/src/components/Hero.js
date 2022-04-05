import { Flex, Heading, VStack } from '@chakra-ui/react'

export const Hero = ({ title, title2 }) => (
  <Flex height="100vh">
    <VStack mt="4rem" mr="17rem" >
    <Heading
      fontSize="10vw"
      bgGradient="linear(to-l, blue.600, blue.800)"
      bgClip="text"
      >
        {title}
    </Heading>
    
    <Heading
      fontSize="10vw"
      bgGradient="linear(to-l, blue.800, blue.600)"
      bgClip="text"
      >
        {title2}
      </Heading>
      </VStack>
  </Flex>
)

Hero.defaultProps = {
  title: 'hera',
  title2: 'sey',

}
