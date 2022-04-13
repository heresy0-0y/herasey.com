import {Box} from "@chakra-ui/react"

export const Page = (props) => {


    return (
        <Box h="100vh"
        {...props}
        as="section"/>
    )
}