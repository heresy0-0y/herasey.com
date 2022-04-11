import WebViewer from '@pdftron/pdfjs-express-viewer'
import {useEffect, useState } from 'react'
import {Container} from './Container'
import {Box} from '@chakra-ui/react'

export const Resume = (props) => {
    const viewer = useRef(null)



    return (
        <Container>
            <Box className="webviewer" ref={viewer}>

            </Box>
        </Container>
    )
} 