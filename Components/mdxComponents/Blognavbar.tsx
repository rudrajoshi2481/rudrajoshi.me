import { Box, Button, Heading, Input, ListItem, UnorderedList, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
const blogs = [
  {
    name:"Welcome",
    link:"/articles/welcome"
  },
  
]


function Navbar() {

  
const [isLargerThan1800] = useMediaQuery('(min-width: 1800px)', {
  ssr: true,
  fallback: false, // return false on the server, and re-evaluate on the client side
})

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  if(!isLargerThan1800){
    return <>
      <DrawerComp isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  }else{
    return (
    
      <Box position={"absolute"} minW="300" left="0" bg="rebeccapurple"  h="full" >
        
        <Heading p="2" m="2">Navigation</Heading>
    
          <UnorderedList>
           {
            blogs.map(r => {
              return <Link href={r.link}><ListItem p="2" m="1" listStyleType={"none"} borderBottom="1px solid black">{r.name}</ListItem></Link>
            })
           }
           
          </UnorderedList>
      </Box>
    )
  }
}


const DrawerComp = ({isOpen,onOpen,onClose}:any) => {

  
  
  return (
    <>
    <Button variant={"outline"}  colorScheme='teal' onClick={onOpen}>
      Articles
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Navigation</DrawerHeader>

        <DrawerBody>
        <UnorderedList>
           {
            blogs.map(r => {
              return <Link href={r.link}><ListItem p="2" m="1" listStyleType={"none"} borderBottom="1px solid black">{r.name}</ListItem></Link>
            })
           }
           
          </UnorderedList>
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}


export default Navbar