import React from 'react'
import {
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Icon,
  } from '@chakra-ui/react'
  import {BsCaretLeft,BsCaretRight} from 'react-icons/bs'
  import {FiLinkedin,FiGithub} from 'react-icons/fi'
  import {IoIosPaper} from 'react-icons/io'
  import {MdOutlineMailOutline} from 'react-icons/md'
  import { DarkModeSwitch } from './DarkModeSwitch'
  import {Link} from './Link'

export const Nav = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>  
            <IconButton ref={btnRef} onClick={onOpen} aria-label='open navigation menu' icon={<Icon as={BsCaretLeft}/>} top="1rem" right="1rem" position="fixed"></IconButton>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>navigation menu</DrawerHeader>
                    <DrawerBody>
                        <Link url='https://linkedin.com/in/herasey'>
                            <IconButton aria-label="my linkedin profile" icon={<Icon as={FiLinkedin} />} />
                        </ Link>
                        <Link url='https://github.com/heresy0-0y'>
                            <IconButton aria-label="my github profile" icon={<Icon as={FiGithub} />} />
                        </Link>
                        {/* <Link> */}
                        <IconButton aria-label="my resume, pdf" icon={<Icon as={IoIosPaper} />} />                         
                        {/* </Link> */}
                        <Link url='/#contact' external={false}>
                        <IconButton aria-label="contact me" icon={<Icon as={MdOutlineMailOutline} />} />
                        </Link>
                        <DarkModeSwitch/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}