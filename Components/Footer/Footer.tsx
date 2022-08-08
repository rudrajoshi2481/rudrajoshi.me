import { Box, Button, Divider, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <Box >
    
    <Box display={"flex"} flexWrap="wrap" py="6" >
        {/* <Box  flex={1} minW="250" p="6">
            <Heading color={"green.500"}>Email Me🔥</Heading>
            <FormLabel my="3">Email</FormLabel>
            <Input type="email"/>
            <FormLabel my="3">body</FormLabel>
            <Textarea />
            <Button mt="6" colorScheme={"green"} variant="outline">Send</Button>
        </Box> */}
        
        <Box  mt="3" flex={1} p="6">
            
            <Heading color={"green.500"}>Contact Details</Heading>
            <Box py="3">
            <Text>Email : rudrajoshi2481@gmail.com</Text>
            <Text>Instagram :<Link href="https://instagram.com"> rudra._joshi</Link></Text>
            <Text>twitter : <Link href="https://twitter.com/Rudrajoshi_">Rudrajoshi_</Link></Text>
            </Box>
        </Box>
    </Box>
    </Box>
  )
}

export default Footer