import React, {useEffect} from 'react'
import { Box, CircularProgress, IconButton } from "@chakra-ui/react"

const PageProgress = ({ scrollProgress }) => {
  
    return (
        <Box pos="absolute" bottom=".5rem" left="0.5rem" >
            <CircularProgress color="teal.600" trackColor="whiteAlpha.200" value={scrollProgress} capIsRound />
            <Box pos="absolute" bottom=".5rem" left="0.5rem"  zIndex={3}>
                
            </Box>
        </Box>
    )
}

export default PageProgress