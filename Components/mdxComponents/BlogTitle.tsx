import { Box, Divider, Heading, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

function BlogTitle({title,description}:any) {

    const { colorMode, toggleColorMode } = useColorMode()

    


  return (
    <>
    <Box py="3" my="3">
        <Heading className='courier-fonts' fontSize={"5xl"} color="green.500">{title}</Heading>
        <Text pt="2"  fontWeight={"light"} fontSize="large" >{description}</Text>
    </Box>
        <Box py="3" my="3">
        <Divider />
        </Box>
        </>
  )
}

export default BlogTitle