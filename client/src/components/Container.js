import { Flex, useColorMode } from '@chakra-ui/react'

export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'linear(to-tr, blue.100, green.100)', dark: 'linear(to-tr, teal.800, green.800)' }

  const color = { light: 'green.800', dark: 'green.200' }
  return (
    <Flex
      direction="column"
      justify="space-around"
      alignItems="center"

      bgGradient={bgColor[colorMode]}
      color={color[colorMode]}
      font='fonts.mono'
      {...props}
    />
  )
}
